import { PricingTier } from './types';

export const subscriptionTiers: PricingTier[] = [
  {
    name: 'Starter',
    id: 'starter',
    price: { 
      monthly: '$0',
      annual: '$0'
    },
    description: 'Perfect for testing the waters.',
    features: [
      '50 AI generations per month',
      'Basic analytics',
      'Community support',
      '1 newsletter integration',
      'Standard templates',
      'Basic audience insights',
      '5 A/B tests per month',
      '14-day free trial'
    ],
    featured: false,
  },
  {
    name: 'Pro',
    id: 'pro',
    price: { 
      monthly: '$29',
      annual: '$290'
    },
    description: 'Ideal for growing newsletters.',
    features: [
      'Unlimited AI generations',
      'Advanced analytics & insights',
      'Priority email support',
      'Multiple newsletter integrations',
      'Unlimited A/B testing',
      'Custom templates',
      'Advanced tone optimization',
      'API access (25k requests/mo)'
    ],
    featured: true,
  },
  {
    name: 'Business',
    id: 'business',
    price: { 
      monthly: '$99',
      annual: '$990'
    },
    description: 'For professional newsletter creators.',
    features: [
      'Everything in Pro',
      'Custom AI training',
      'Team collaboration tools',
      'Unlimited API access',
      'Dedicated account manager',
      'Custom reporting',
      'White-label options',
      'Enterprise SSO'
    ],
    featured: false,
  },
];