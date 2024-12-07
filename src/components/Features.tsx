import React from 'react';
import { Sparkles, TrendingUp, History, Zap, Target, Brain } from 'lucide-react';

const features = [
  {
    name: 'Smart AI Generation',
    description: 'Our advanced AI analyzes top-performing newsletters to generate subject lines that capture attention and drive opens.',
    icon: Sparkles,
  },
  {
    name: 'Real-time Analytics',
    description: 'Monitor performance metrics instantly and get AI-powered suggestions to improve your open rates.',
    icon: TrendingUp,
  },
  {
    name: 'Smart Learning',
    description: 'Our AI learns from your audience\'s behavior to continuously improve subject line performance.',
    icon: History,
  },
  {
    name: 'Instant A/B Testing',
    description: 'Test multiple variations simultaneously and get predictive insights before sending.',
    icon: Zap,
  },
  {
    name: 'Audience Insights',
    description: 'Understand what resonates with your specific audience through detailed engagement analytics.',
    icon: Target,
  },
  {
    name: 'Tone Optimization',
    description: 'Automatically adjust language and style to match your brand voice and audience preferences.',
    icon: Brain,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Optimize Faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to maximize newsletter engagement
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stop spending hours crafting the perfect subject line. Let AI do the heavy lifting while you focus on creating great content.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100">
                    <feature.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}