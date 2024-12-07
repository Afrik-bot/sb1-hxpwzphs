import { loadStripe } from '@stripe/stripe-js';
import type { Stripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY) as Promise<Stripe | null>;

export async function createPaymentIntent(amount: number, currency: string = 'usd') {
  // In a real app, this would be a server call
  // For demo purposes, we'll simulate a successful response
  return {
    clientSecret: 'demo_pi_3NjKqLHe8bpjyTZK1eQJkUxB_secret_demo123',
    amount,
    currency
  };
}