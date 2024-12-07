import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features/index';
import Pricing from '../components/Pricing';
import GetStarted from '../components/GetStarted';
import SubjectLineGenerator from '../components/SubjectLineGenerator';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features 
        onFeatureLearnMore={(feature) => {
          console.log('Learn more about:', feature.title);
        }}
      />
      <SubjectLineGenerator />
      <GetStarted />
      <Pricing />
    </div>
  );
}