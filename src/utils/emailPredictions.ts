import type { PredictionFactors, OpenRatePrediction } from '../types/predictions';

const BASELINE_OPEN_RATE = 0.22; // Industry average of 22%

const TIME_MULTIPLIERS = {
  morning: 1.2,   // 6am-11am
  afternoon: 0.9, // 11am-2pm
  evening: 1.1,   // 2pm-6pm
  night: 0.7,     // 6pm-6am
};

const DAY_MULTIPLIERS = {
  monday: 1.1,
  tuesday: 1.15,
  wednesday: 1.1,
  thursday: 1.05,
  friday: 0.95,
  saturday: 0.8,
  sunday: 0.85,
};

const SUBJECT_LINE_FACTORS = {
  length: {
    tooShort: 0.85,    // < 20 chars
    optimal: 1.15,      // 20-60 chars
    tooLong: 0.9,      // > 60 chars
  },
  containsEmoji: 1.08,
  containsNumber: 1.05,
  personalizedToken: 1.12,
  urgencyWords: 1.07,
  questionMark: 1.03,
};

function getTimeOfDayMultiplier(hour: number): number {
  if (hour >= 6 && hour < 11) return TIME_MULTIPLIERS.morning;
  if (hour >= 11 && hour < 14) return TIME_MULTIPLIERS.afternoon;
  if (hour >= 14 && hour < 18) return TIME_MULTIPLIERS.evening;
  return TIME_MULTIPLIERS.night;
}

function getDayMultiplier(day: keyof typeof DAY_MULTIPLIERS): number {
  return DAY_MULTIPLIERS[day];
}

function analyzeSubjectLine(subject: string): number {
  if (!subject || typeof subject !== 'string') {
    return 1;
  }

  let multiplier = 1;
  
  // Length analysis
  if (subject.length < 20) multiplier *= SUBJECT_LINE_FACTORS.length.tooShort;
  else if (subject.length <= 60) multiplier *= SUBJECT_LINE_FACTORS.length.optimal;
  else multiplier *= SUBJECT_LINE_FACTORS.length.tooLong;
  
  // Content analysis
  if (/[\p{Emoji}]/u.test(subject)) multiplier *= SUBJECT_LINE_FACTORS.containsEmoji;
  if (/\d/.test(subject)) multiplier *= SUBJECT_LINE_FACTORS.containsNumber;
  if (/\{.*?\}/.test(subject)) multiplier *= SUBJECT_LINE_FACTORS.personalizedToken;
  if (/urgent|limited|expires|last chance/i.test(subject)) {
    multiplier *= SUBJECT_LINE_FACTORS.urgencyWords;
  }
  if (subject.includes('?')) multiplier *= SUBJECT_LINE_FACTORS.questionMark;
  
  return multiplier;
}

function addRandomVariation(prediction: number): number {
  const variation = (Math.random() * 0.04) - 0.02; // ±2% random variation
  return Math.max(0, Math.min(1, prediction + variation));
}

export function predictOpenRate(factors: PredictionFactors): OpenRatePrediction {
  const {
    subject,
    sendTime = new Date(),
    historicalOpenRate,
    segmentEngagement = 1,
    deviceMix = { mobile: 0.6, desktop: 0.3, tablet: 0.1 },
  } = factors || {};

  if (!subject || typeof subject !== 'string') {
    return {
      prediction: BASELINE_OPEN_RATE,
      confidenceInterval: {
        lower: BASELINE_OPEN_RATE * 0.9,
        upper: BASELINE_OPEN_RATE * 1.1,
      },
      factors: {
        timeImpact: 1,
        dayImpact: 1,
        subjectLineScore: 1,
        segmentScore: 1,
        deviceMixImpact: 1,
      },
    };
  }

  let prediction = BASELINE_OPEN_RATE;

  // Apply historical performance if available
  if (historicalOpenRate) {
    prediction = (prediction + historicalOpenRate) / 2;
  }

  // Time-based factors
  const dayName = sendTime.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase() as keyof typeof DAY_MULTIPLIERS;
  prediction *= getDayMultiplier(dayName);
  prediction *= getTimeOfDayMultiplier(sendTime.getHours());

  // Subject line analysis
  prediction *= analyzeSubjectLine(subject);

  // Segment engagement
  prediction *= segmentEngagement;

  // Device mix impact
  const deviceImpact = (
    deviceMix.mobile * 1.1 +    // Mobile typically has higher engagement
    deviceMix.desktop * 0.95 +  // Desktop slightly lower
    deviceMix.tablet * 1.0      // Tablet about average
  );
  prediction *= deviceImpact;

  // Add slight random variation
  prediction = addRandomVariation(prediction);

  // Calculate confidence interval (95%)
  const standardError = prediction * 0.1; // 10% of prediction
  const confidenceInterval = {
    lower: Math.max(0, prediction - 1.96 * standardError),
    upper: Math.min(1, prediction + 1.96 * standardError),
  };

  return {
    prediction: Number(prediction.toFixed(4)),
    confidenceInterval: {
      lower: Number(confidenceInterval.lower.toFixed(4)),
      upper: Number(confidenceInterval.upper.toFixed(4)),
    },
    factors: {
      timeImpact: getTimeOfDayMultiplier(sendTime.getHours()),
      dayImpact: getDayMultiplier(dayName),
      subjectLineScore: analyzeSubjectLine(subject),
      segmentScore: segmentEngagement,
      deviceMixImpact: deviceImpact,
    },
  };
}