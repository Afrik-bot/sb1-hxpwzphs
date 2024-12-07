import type { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FeatureCardProps extends Feature {
  className?: string;
  onLearnMore?: () => void;
}

export interface FeaturesProps {
  features?: Feature[];
  heading?: string;
  subheading?: string;
  description?: string;
  onFeatureLearnMore?: (feature: Feature) => void;
}