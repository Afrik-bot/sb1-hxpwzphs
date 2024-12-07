import React from 'react';
import { Sparkles, TrendingUp, Clock, Target } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Craft Perfect Newsletter Subject Lines with AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stop guessing, start converting. SubjectSage uses AI to generate and test subject lines that capture attention and drive opens.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start Free Trial
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by newsletter creators worldwide
              </h2>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">Newsletters Optimized</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">8,000+</dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">Average Open Rate Increase</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">23%</dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">Time Saved per Week</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">3.5h</dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">Happy Creators</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">2,000+</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}