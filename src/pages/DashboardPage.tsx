import React from 'react';
import SubjectLineGenerator from '../components/SubjectLineGenerator';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Generate and optimize your newsletter subject lines
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <SubjectLineGenerator />
        </div>
      </div>
    </div>
  );
}