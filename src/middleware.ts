import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getTemplate } from './lib/template';
import { getTheme } from './lib/theme';

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const { searchParams } = request.nextUrl;
    const theme = searchParams?.get('theme');
    const template = searchParams?.get('template');
    if (theme) {
        const themeValue = getTheme(theme);
        response.cookies.set('theme', themeValue);
    }

    if (template) {
        const templateValue = getTemplate(template);
        response.cookies.set('template', templateValue ?? '');
    }
    return response;
}
