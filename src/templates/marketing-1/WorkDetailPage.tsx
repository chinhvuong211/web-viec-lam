import { MarketingData } from '@/features/common/interface';
import MarketingWorkDetail from '@/features/work/detail/MarketingWorkDetail';
import { ProjectItem } from '@/features/work/interface';
import Header from './components/Header';
import Footer from './components/Footer';

type Props = {
    data: MarketingData;
    slug: string;
};
export default function Marketing1WorkDetailPage({
    data,
    slug,
}: Props) {

    const projectDetail = data.projects.find((item) => item.id === slug) as ProjectItem;

    return <div>
        <Header name={data.aboutMe.name} />
        <MarketingWorkDetail projectDetail={projectDetail} />

        <Footer />
    </div>;
}
