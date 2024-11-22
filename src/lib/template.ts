import { cookies } from 'next/headers';

import { Template } from './constant';

export const getTemplate = (value?: string | null) => {
    switch (value) {
        case Template.DEVELOPER_1:
            return Template.DEVELOPER_1;
        case Template.DEVELOPER_2:
            return Template.DEVELOPER_2;
        case Template.DEVELOPER_3:
            return Template.DEVELOPER_3;
        case Template.MARKETING_1:
            return Template.MARKETING_1;
        case Template.MARKETING_2:
            return Template.MARKETING_2;
        case Template.MARKETING_3:
            return Template.MARKETING_3;
    }
};

export const getCookieTemplate = () => {
    const cookieStore = cookies();
    return getTemplate(cookieStore.get('template')?.value);
};
