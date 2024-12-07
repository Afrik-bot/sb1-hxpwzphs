import React from 'react';
import FeatureCard from './FeatureCard';
import { features as defaultFeatures } from './featureData';
import type { Feature, FeaturesProps } from './types';

export default function Features({
  features = defaultFeatures,
  heading = 'Features',
  subheading = 'Turn subscribers into superfans',
  description = 'Leverage AI to craft perfect subject lines in seconds. Focus on what matters most - creating amazing content your readers love.',
  onFeatureLearnMore,
}: FeaturesProps) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <div id="features" className="bg-white py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            {heading}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {subheading}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                onLearnMore={() => onFeatureLearnMore?.(feature)}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}