import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { createThemes } from 'tw-colors';

import { backgroundImage, colors, typographyComponents } from './theme';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
        './src/features/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '36rem',

            md: '48rem',

            lg: '62rem',

            xl: '75rem',

            xxl: '100rem',

            '3xl': '120rem',
        },
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'], 
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },

                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
                light: {
                    primary: '#272626',
                },
            },
            backgroundImage,
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
        boxShadow: {
            green: '0px 0px 20px 0px #0057FF4D;',
            xxl: '0px 25px 60px -15px #10182833', // shadow-xxlarge
            sm: '0px 0px 20px 4px #0000000D inset',
            xs: '0px 0px 18px 4px #00000014 inset',
        },
    },
    plugins: [
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('tailwindcss-animate'),
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.flex-center-between': {
                    '@apply flex items-center justify-between': {},
                },
                '.flex-center': {
                    '@apply flex items-center justify-center': {},
                },
            });

            addUtilities(typographyComponents);
        }),
        createThemes({ ...colors }),
    ],
};
export default config;
