import { Sparkles, TrendingUp, History, Zap, Target, Brain } from 'lucide-react';
import type { Feature } from './types';

export const features: Feature[] = [
  {
    title: 'Smart AI Generation',
    description: "Generate high-converting subject lines in seconds using AI trained on millions of successful newsletters.",
    icon: Sparkles,
  },
  {
    title: 'Real-time Analytics',
    description: "Track open rates, clicks, and engagement in real-time with actionable AI-powered optimization suggestions.",
    icon: TrendingUp,
  },
  {
    title: 'Smart Learning',
    description: 'Our AI learns from your audience\'s behavior to continuously improve subject line performance.',
    icon: History,
  },
  {
    title: 'Instant A/B Testing',
    description: "Test up to 5 variations instantly with AI-powered predictions before sending to maximize impact.",
    icon: Zap,
  },
  {
    title: 'Audience Insights',
    description: "Discover what truly resonates with your audience through deep-learning powered engagement analysis.",
    icon: Target,
  },
  {
    title: 'Tone Optimization',
    description: "Perfect your brand voice with AI that learns and matches your unique style and audience preferences.",
    icon: Brain,
  },
];