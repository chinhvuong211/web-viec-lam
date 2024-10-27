import type { MetadataRoute } from 'next';

import { getBaseUrl } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${getBaseUrl()}/`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${getBaseUrl()}/work`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${getBaseUrl()}/about-me`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        // Add more URLs here
    ];
}
