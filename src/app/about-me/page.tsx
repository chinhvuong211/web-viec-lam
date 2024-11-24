import React from 'react';

import marketingData from '@/data/marketing.json';
import { Template, Theme } from '@/lib/constant';
import { getCookieTemplate } from '@/lib/template';
import { getCookieTheme } from '@/lib/theme';
import Developer1AboutMe from '@/templates/developer-1/AboutMePage';
import Developer2AboutMe from '@/templates/developer-2/AboutMePage';
import Developer3AboutMe from '@/templates/developer-3/AboutMePage';
import Marketing1AboutMe from '@/templates/marketing-1/AboutMePage';
import Marketing2AboutMe from '@/templates/marketing-2/AboutMePage';
import Marketing3AboutMe from '@/templates/marketing-3/AboutMePage';

function AboutMePage() {
    const theme = getCookieTheme();
    const template = getCookieTemplate();

    switch (template) {
        case Template.DEVELOPER_1:
            return <Developer1AboutMe />;
        case Template.DEVELOPER_3:
            return <Developer3AboutMe />;
        case Template.DEVELOPER_2:
            return <Developer2AboutMe />;
        case Template.MARKETING_1:
            return <Marketing1AboutMe data={marketingData} />;
        case Template.MARKETING_2:
            return <Marketing2AboutMe data={marketingData} />;
        case Template.MARKETING_3:
            return <Marketing3AboutMe data={marketingData} />;
    }

    switch (theme) {
        case Theme.DEVELOPER_1:
            return <Developer1AboutMe />;
        case Theme.DEVELOPER_3:
            return <Developer3AboutMe />;
        case Theme.DEVELOPER_2:
            return <Developer2AboutMe />;
        default:
            return null;
    }
}

export default AboutMePage;
