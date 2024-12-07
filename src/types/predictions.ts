export interface PredictionFactors {
  subject: string;
  sendTime?: Date;
  historicalOpenRate?: number;
  segmentEngagement?: number;
  deviceMix?: {
    mobile: number;
    desktop: number;
    tablet: number;
  };
}

export interface PredictionFactorScores {
  timeImpact: number;
  dayImpact: number;
  subjectLineScore: number;
  segmentScore: number;
  deviceMixImpact: number;
}

export interface OpenRatePrediction {
  prediction: number;
  confidenceInterval: {
    lower: number;
    upper: number;
  };
  factors: PredictionFactorScores;
}