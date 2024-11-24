import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getTemplate } from './lib/template';
import { getTheme } from './lib/theme';
import { Template, Theme } from './lib/constant';

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
        switch (template) {
            case Template.DEVELOPER_1:
                response.cookies.set('theme', Theme.DEVELOPER_1);
                break;
            case Template.DEVELOPER_2:
                response.cookies.set('theme', Theme.DEVELOPER_2);
                break;
            case Template.DEVELOPER_3:
                response.cookies.set('theme', Theme.DEVELOPER_3);
                break;
            default:
                response.cookies.set('theme', Theme.DEVELOPER_3);
                break;

        }
    }
    return response;
}
