export interface PricingTier {
  id: string;
  name: string;
  price: {
    monthly: string;
    annual: string;
  };
  description: string;
  features: string[];
  featured: boolean;
}

export interface PricingProps {
  heading?: string;
  subheading?: string;
  description?: string;
}