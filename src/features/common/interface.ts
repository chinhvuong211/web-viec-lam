import marketingData from '@/data/marketing.json';

export type MarketingData = typeof marketingData;

export type SkillItem = {
    name: string;
    description: string;
};

export type WhatTheySaidAboutMeItem = {
    name: string;
    avatar: string;
    position: string;
    description: string;
    star?: number;
};
