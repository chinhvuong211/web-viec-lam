import '@/styles/global.css';
import '@/styles/common.scss';

import { MainLayout } from '@/components/layout/MainLayout';
import developerData from '@/data/developer.json';
import marketingData from '@/data/marketing.json';
import { TemplateCategory } from '@/lib/constant';
import { getCookieTemplate } from '@/lib/template';
import { getCookieTheme } from '@/lib/theme';
import { cn, getBaseUrl, getTemplateCategory } from '@/lib/utils';

export async function generateMetadata() {
    const imageUrl = `${getBaseUrl()}/assets/images/profile/avatar.png`;

    const template = getCookieTemplate();
    const templateDataMapping = {
        [TemplateCategory.DEVELOPER]: developerData,
        [TemplateCategory.MARKETING]: marketingData,
    };

    const data = templateDataMapping[getTemplateCategory(template || '')];
    const { aboutMe, skills } = data;

    return {
        robots: 'index, follow',
        metadataBase: new URL(getBaseUrl()),
        alternates: {
            canonical: '/',
            languages: {
                en: '/en',
                vi: '/vi',
            },
        },
        title: aboutMe.name,
        description: aboutMe.name,
        keywords: skills.map((item) => item.name).join(', '),
        twitter: {
            card: 'summary_large_image',
            title: aboutMe.name,
            description: 'meta_description',
            images: imageUrl,
        },
        openGraph: {
            type: 'website',
            title: aboutMe.name,
            images: imageUrl,
            siteName: aboutMe.name,
            description: 'meta_description',
            url: getBaseUrl(),
            countryName: 'Viet Nam',
        },
        icons: [
            {
                rel: 'apple-touch-icon',
                url: '/apple-touch-icon.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                url: '/favicon-32x32.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                url: '/favicon-16x16.png',
            },
            {
                rel: 'icon',
                url: '/favicon.ico',
            },
        ],
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const theme = getCookieTheme();
    const template = getCookieTemplate();

    const themeName: Record<TemplateCategory, string> = {
        [TemplateCategory.MARKETING]: 'theme-marketing',
        [TemplateCategory.DEVELOPER]: 'theme-developer',
    };

    const themeClass = themeName[getTemplateCategory(template ?? '')] || 'theme-developer';

    return (
        <html lang="en" className={cn(theme, themeClass)}>
            <body>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
}
