import React from 'react';
import { Rocket, Sparkles, Target, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Create your account',
    description: 'Sign up in seconds with just your email. No credit card required for the free trial.',
    icon: Rocket,
  },
  {
    title: 'Connect your newsletter',
    description: 'Integrate with your favorite email platform or import your subscriber data directly.',
    icon: Target,
  },
  {
    title: 'Generate & optimize',
    description: 'Let our AI analyze your content and create perfectly crafted subject lines.',
    icon: Sparkles,
  },
];

export default function GetStarted() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Get Started</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Start optimizing in minutes
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Three simple steps to transform your newsletter performance
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <step.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-gray-900">
                  <span className="text-indigo-600 mr-2">{index + 1}.</span>
                  {step.title}
                </dt>
                <dd className="mt-2 leading-7 text-gray-600">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Start Your Free Trial
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}