import React from 'react';
import type { Feature, FeatureCardProps } from './types';

export default function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  className = '',
  onLearnMore
}: FeatureCardProps) {
  return (
    <div className={`flex flex-col bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
        {Icon && (
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100">
            <Icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
          </div>
        )}
        {title}
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
        <p className="flex-auto">{description}</p>
        <p className="mt-6">
          <button
            onClick={onLearnMore}
            className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Learn more <span aria-hidden="true">→</span>
          </button>
        </p>
      </dd>
    </div>
  );
}