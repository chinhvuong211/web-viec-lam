import { ProjectItem } from '@/features/work/interface';

export default function MarketingStyle1WorkDetailPage({
    projectDetail,
}: {
    projectDetail: ProjectItem;
}) {
    return <div>{projectDetail.title}</div>;
}
