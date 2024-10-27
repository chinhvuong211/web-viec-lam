import '@/styles/global.css';
import '@/styles/common.scss';

import type { Metadata } from 'next';

import { MainLayout } from '@/components/layout/MainLayout';
import data from '@/data/data.json';
import { getCookieTheme } from '@/lib/theme';
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

    return (
        <html lang="en" className={theme}>
            <body>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
}
