export interface SubjectLine {
  id: string;
  original: string;
  variations: string[];
  metrics?: {
    openRate: number;
    clickRate: number;
  };
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  plan: 'free' | 'pro' | 'business';
  credits: number;
}

export interface HistoryItem {
  id: string;
  subjectLine: SubjectLine;
  performance: {
    openRate: number;
    clickRate: number;
    sentAt: Date;
    audienceSize: number;
  };
}