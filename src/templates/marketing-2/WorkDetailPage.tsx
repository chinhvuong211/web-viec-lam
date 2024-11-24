import { MarketingData } from '@/features/common/interface';
import TestimonialSection from '@/features/home/marketing/TestimonialSection';
import MarketingWorkDetail from '@/features/work/detail/MarketingWorkDetail';
import { ProjectItem } from '@/features/work/interface';

import Footer from './components/Footer';
import Header from './components/Header';
import WhatClientsSayAboutMe from './components/WhatClientsSayAboutMe';

type Props = {
    data: MarketingData;
    slug: string;
};
export default function Marketing3WorkDetailPage({ data, slug }: Props) {
    const projectDetail = data.projects.find((item) => item.id === slug) as ProjectItem;

    return (
        <div>
            <Header name={data.aboutMe.name} />
            <MarketingWorkDetail projectDetail={projectDetail} />
            {/* Testimonial Section */}
            <WhatClientsSayAboutMe data={data} />
            <Footer />
        </div>
    );
}
