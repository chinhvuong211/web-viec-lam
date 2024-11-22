import '@/styles/global.css';
import '@/styles/common.scss';

import type { Metadata } from 'next';

import { MainLayout } from '@/components/layout/MainLayout';
import data from '@/data/developer.json';
import { getCookieTemplate } from '@/lib/template';
import { getCookieTheme } from '@/lib/theme';
import { cn } from '@/lib/utils';
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

    const themeName = {
        marketing: 'theme-marketing',
        developer: 'theme-developer',
    };

    const themeClass =
        themeName[template?.split('-')[0] as keyof typeof themeName] || 'theme-developer';

    return (
        <html lang="en" className={cn(theme, themeClass)}>
            <body>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
}
