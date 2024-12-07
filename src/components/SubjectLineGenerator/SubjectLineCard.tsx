import React from 'react';
import { Copy, ThumbsUp } from 'lucide-react';
import type { OpenRatePrediction } from '../../types/predictions';

interface SubjectLineCardProps {
  subject: string;
  prediction: OpenRatePrediction;
}

export default function SubjectLineCard({ subject, prediction }: SubjectLineCardProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(subject);
  };

  const formatPercent = (value: number) => `${(value * 100).toFixed(1)}%`;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1 overflow-hidden">
          <h3 className="text-lg font-medium text-gray-900">{subject}</h3>
          <div className="mt-2 space-y-2">
          <div className="flex items-center">
            <ThumbsUp className="h-5 w-5 text-indigo-600" />
            <span className="ml-2 text-sm text-gray-600 truncate">
              Predicted open rate: {formatPercent(prediction.prediction)}
              <span className="text-gray-400 ml-1">
                ({formatPercent(prediction.confidenceInterval.lower)} - {formatPercent(prediction.confidenceInterval.upper)})
              </span>
            </span>
          </div>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="ml-4 p-2 text-gray-400 hover:text-gray-600"
          title="Copy to clipboard"
        >
          <Copy className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}