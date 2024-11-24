import marketingData from '@/data/marketing.json';
import { Template, Theme } from '@/lib/constant';
import { getCookieTemplate } from '@/lib/template';
import { getCookieTheme } from '@/lib/theme';
import Developer1 from '@/templates/developer-1/HomePage';
import Developer2 from '@/templates/developer-2/HomePage';
import Developer3 from '@/templates/developer-3/HomePage';
import Marketing1 from '@/templates/marketing-1/HomePage';
import Marketing2 from '@/templates/marketing-2/HomePage';
import Marketing3 from '@/templates/marketing-3/HomePage';

function Index() {
    const theme = getCookieTheme();
    const template = getCookieTemplate();

    switch (template) {
        case Template.DEVELOPER_1:
            return <Developer1 />;
        case Template.DEVELOPER_3:
            return <Developer3 />;
        case Template.DEVELOPER_2:
            return <Developer2 />;
        case Template.MARKETING_1:
            return <Marketing1 data={marketingData} />;
        case Template.MARKETING_2:
            return <Marketing2 data={marketingData} />;
        case Template.MARKETING_3:
            return <Marketing3 data={marketingData} />;
    }

    switch (theme) {
        case Theme.DEVELOPER_1:
            return <Developer1 />;
        case Theme.DEVELOPER_3:
            return <Developer3 />;
        case Theme.DEVELOPER_2:
            return <Developer2 />;
        default:
            return <Developer1 />;
    }
}

export default Index;
