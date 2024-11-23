import '@/styles/global.css';
import '@/styles/common.scss';

import type { Metadata } from 'next';

import { MainLayout } from '@/components/layout/MainLayout';
import data from '@/data/developer.json';
import { getCookieTemplate } from '@/lib/template';
import { getCookieTheme } from '@/lib/theme';
import { cn, getTemplateCategory } from '@/lib/utils';
import { TemplateCategory } from '@/lib/constant';
const { aboutMe } = data;
export const metadata: Metadata = {
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
    title: aboutMe.name,
    description: aboutMe.position,
};

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

    const themeClass = themeName[getTemplateCategory(template ?? "")] || 'theme-developer';

    return (
        <html lang="en" className={cn(theme, themeClass)}>
            <body>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
}
