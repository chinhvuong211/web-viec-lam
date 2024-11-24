import developerData from '@/data/developer.json';
import marketingData from '@/data/marketing.json';
import { ProjectItem } from '@/features/work/interface';
import { Template, TemplateCategory, Theme } from '@/lib/constant';
import { getCookieTemplate } from '@/lib/template';
import { getCookieTheme } from '@/lib/theme';
import { getTemplateCategory } from '@/lib/utils';
import Developer1WorkDetail from '@/templates/developer-1/WorkDetailPage';
import Developer2WorkDetail from '@/templates/developer-2/WorkDetailPage';
import Developer3WorkDetail from '@/templates/developer-3/WorkDetailPage';
import Marketing1WorkDetail from '@/templates/marketing-1/WorkDetailPage';
import Marketing2WorkDetail from '@/templates/marketing-2/WorkDetailPage';
import Marketing3WorkDetail from '@/templates/marketing-3/WorkDetailPage';

export default function Page({ params }: { params: { slug: string } }) {
    const theme = getCookieTheme();
    const template = getCookieTemplate();
    const data = {
        [TemplateCategory.DEVELOPER]: developerData,
        [TemplateCategory.MARKETING]: marketingData,
    };
    const projectDetail = data[getTemplateCategory(template ?? '')].projects.find(
        (item) => item.id === params.slug
    ) as ProjectItem;

    if (!projectDetail) {
        return <div>Project not found</div>;
    }

    switch (template) {
        case Template.DEVELOPER_1:
            return <Developer1WorkDetail projectDetail={projectDetail} />;
        case Template.DEVELOPER_3:
            return <Developer3WorkDetail projectDetail={projectDetail} />;
        case Template.DEVELOPER_2:
            return <Developer2WorkDetail projectDetail={projectDetail} />;
        case Template.MARKETING_1:
            return <Marketing1WorkDetail data={marketingData} slug={params.slug} />;
        case Template.MARKETING_2:
            return <Marketing2WorkDetail data={marketingData} slug={params.slug} />;
        case Template.MARKETING_3:
            return <Marketing3WorkDetail data={marketingData} slug={params.slug} />;
    }

    switch (theme) {
        case Theme.DEVELOPER_1:
            return <Developer1WorkDetail projectDetail={projectDetail} />;
        case Theme.DEVELOPER_2:
            return <Developer2WorkDetail projectDetail={projectDetail} />;
        case Theme.DEVELOPER_3:
            return <Developer3WorkDetail projectDetail={projectDetail} />;
        default:
            return <Developer1WorkDetail projectDetail={projectDetail} />;
    }
}
