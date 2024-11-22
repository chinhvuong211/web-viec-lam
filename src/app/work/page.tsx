import { Template, Theme } from '@/lib/constant';
import { getCookieTemplate } from '@/lib/template';
import { getCookieTheme } from '@/lib/theme';
import Developer1Work from '@/templates/developer-1/WorkPage';
import Developer2Work from '@/templates/developer-2/WorkPage';
import Developer3Work from '@/templates/developer-3/WorkPage';
import Marketing1Work from '@/templates/marketing-1/WorkPage';
import Marketing2Work from '@/templates/marketing-2/WorkPage';
import Marketing3Work from '@/templates/marketing-3/WorkPage';
import marketingData from '@/data/marketing.json';

function Page() {
    const theme = getCookieTheme();
    const template = getCookieTemplate();

    switch (template) {
        case Template.DEVELOPER_1:
            return <Developer1Work />;
        case Template.DEVELOPER_3:
            return <Developer3Work />;
        case Template.DEVELOPER_2:
            return <Developer2Work />;
        case Template.MARKETING_1:
            return <Marketing1Work data={marketingData} />;
        case Template.MARKETING_2:
            return <Marketing2Work />;
        case Template.MARKETING_3:
            return <Marketing3Work />;
    }

    switch (theme) {
        case Theme.DEVELOPER_1:
            return <Developer1Work />;
        case Theme.DEVELOPER_3:
            return <Developer3Work />;
        case Theme.DEVELOPER_2:
            return <Developer2Work />;
        default:
            return <Developer1Work />;
    }
}

export default Page;
