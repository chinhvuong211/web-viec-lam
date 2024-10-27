import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getTheme } from './lib/theme';

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const { searchParams } = request.nextUrl;
    const theme = searchParams?.get('theme');
    if (theme) {
        const themeValue = getTheme(theme);
        response.cookies.set('theme', themeValue);
    }
    return response;
}
