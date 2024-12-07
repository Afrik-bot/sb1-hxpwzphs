import React from 'react';
import { MessageSquare, Briefcase, Zap } from 'lucide-react';

interface ToneSelectorProps {
  value: 'professional' | 'casual' | 'exciting';
  onChange: (tone: 'professional' | 'casual' | 'exciting') => void;
}

const tones = [
  {
    id: 'professional',
    name: 'Professional',
    description: 'Formal and business-oriented',
    icon: Briefcase,
  },
  {
    id: 'casual',
    name: 'Casual',
    description: 'Friendly and conversational',
    icon: MessageSquare,
  },
  {
    id: 'exciting',
    name: 'Exciting',
    description: 'High-energy and impactful',
    icon: Zap,
  },
] as const;

export default function ToneSelector({ value, onChange }: ToneSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Tone</label>
      <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {tones.map((tone) => (
          <button
            key={tone.id}
            type="button"
            className={`relative flex cursor-pointer rounded-lg border p-4 shadow-sm focus:outline-none ${
              value === tone.id
                ? 'border-indigo-500 ring-2 ring-indigo-500'
                : 'border-gray-300'
            }`}
            onClick={() => onChange(tone.id)}
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center">
                <div className="text-sm">
                  <div className="flex items-center gap-x-2">
                    <tone.icon className="h-5 w-5 text-indigo-600" />
                    <p className="font-medium text-gray-900">{tone.name}</p>
                  </div>
                  <p className="text-gray-500">{tone.description}</p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}