import React, { useState } from 'react';
import { Sparkles, RefreshCw, Copy, ThumbsUp } from 'lucide-react';
import { generateSubjectLines, predictOpenRate } from '../../utils/subjectLineGenerator';
import SubjectLineCard from './SubjectLineCard';
import ToneSelector from './ToneSelector';

export default function SubjectLineGenerator() {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState<'professional' | 'casual' | 'exciting'>('professional');
  const [variations, setVariations] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    
    setIsGenerating(true);
    try {
      const newVariations = await generateSubjectLines(topic, tone);
      setVariations(newVariations);
    } catch (error) {
      console.error('Failed to generate subject lines:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex flex-col space-y-4">
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
              What's your newsletter about?
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                id="topic"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="e.g., 5 productivity tips for remote workers"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !topic.trim()}
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {isGenerating ? (
                  <RefreshCw className="h-5 w-5 animate-spin" />
                ) : (
                  <Sparkles className="h-5 w-5" />
                )}
                <span className="ml-2">Generate</span>
              </button>
            </div>
          </div>
          
          <ToneSelector value={tone} onChange={setTone} />
        </div>
      </div>

      {variations.length > 0 && (
        <div className="space-y-4">
          {variations.map((variation, index) => (
            <SubjectLineCard
              key={index}
              subject={variation}
              prediction={predictOpenRate({ subject: variation })}
            />
          ))}
        </div>
      )}
    </div>
  );
}