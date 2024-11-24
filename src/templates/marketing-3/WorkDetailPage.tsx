import { MarketingData } from '@/features/common/interface';
import MarketingWorkDetail from '@/features/work/detail/MarketingWorkDetail';
import { ProjectItem } from '@/features/work/interface';

type Props = {
    data: MarketingData;
    slug: string;
};
export default function MarketingStyle3WorkDetailPage({ data, slug }: Props) {
    const projectDetail = data.projects.find((item) => item.id === slug) as ProjectItem;
    return <MarketingWorkDetail projectDetail={projectDetail} />;
}
