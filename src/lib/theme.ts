import { cookies } from 'next/headers';

import { Theme } from './constant';

export function getTheme(value?: string | null) {
    switch (value) {
        case Theme.DEVELOPER_2:
            return Theme.DEVELOPER_2;
        case Theme.DEVELOPER_3:
            return Theme.DEVELOPER_3;
        default:
            return Theme.DEVELOPER_1;
    }
}

export const getCookieTheme = () => {
    const cookieStore = cookies();
    return getTheme(cookieStore.get('theme')?.value || '');
};
