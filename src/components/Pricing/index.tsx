import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { subscriptionTiers } from './pricingData';
import type { PricingProps } from './types';

export default function Pricing({ 
  heading = 'Pricing',
  subheading = 'Scale your newsletter growth',
  description = 'Start free, no credit card required. Save 20% with annual billing. Cancel anytime, hassle-free.',
}: PricingProps = {}) {
  const [isAnnual, setIsAnnual] = useState(false);
  const navigate = useNavigate();

  const handlePlanSelect = (planId: string) => {
    navigate('/signup', { state: { selectedPlan: planId, billing: isAnnual ? 'annual' : 'monthly' } });
  };

  return (
    <div id="pricing" className="bg-gray-900 py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">{heading}</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {subheading}
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          {description}
        </p>
        
        <div className="mt-8 flex justify-center">
          <div className="relative flex rounded-full bg-gray-800 p-1">
            <button
              type="button"
              className={`${
                !isAnnual ? 'bg-indigo-500' : 'bg-transparent'
              } relative rounded-full py-2 px-4 text-sm font-semibold text-white shadow-sm transition-colors`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`${
                isAnnual ? 'bg-indigo-500' : 'bg-transparent'
              } relative rounded-full py-2 px-4 text-sm font-semibold text-white shadow-sm transition-colors`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
            </button>
          </div>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {subscriptionTiers.map((tier) => (
            <div
              key={tier.id}
              className={`${
                tier.featured
                  ? 'bg-white/5 ring-2 ring-indigo-500'
                  : 'ring-1 ring-white/10'
              } rounded-3xl p-8 xl:p-10`}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  className={`text-lg font-semibold leading-8 ${
                    tier.featured ? 'text-white' : 'text-gray-300'
                  }`}
                >
                  {tier.name}
                </h3>
                {tier.featured && (
                  <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                )}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  {isAnnual ? tier.price.annual : tier.price.monthly}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-300">
                  {isAnnual ? '/year' : '/month'}
                </span>
              </p>
              <button
                onClick={() => handlePlanSelect(tier.id)}
                className={`${
                  tier.featured
                    ? 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'
                } mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors w-full`}
              >
                {tier.name === 'Starter' ? 'Start Free Trial' : 'Get Started'}
              </button>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}