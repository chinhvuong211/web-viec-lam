import marketingData from '@/data/marketing.json';

export type MarketingData = typeof marketingData;

export type MarketingProjectItem = MarketingData['projects'][number];
