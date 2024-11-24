import { MarketingData } from '@/features/common/interface';
import TestimonialSection from '@/features/home/marketing/TestimonialSection';
import MarketingWorkDetail from '@/features/work/detail/MarketingWorkDetail';
import { ProjectItem } from '@/features/work/interface';

import Footer from './components/Footer';
import Header from './components/Header';
import WhatClientsSayAboutMe from './components/WhatClientsSayAboutMe';
import { Assets } from '@/assets';

type Props = {
    data: MarketingData;
    slug: string;
};
export default function Marketing3WorkDetailPage({ data, slug }: Props) {
    const projectDetail = data.projects.find((item) => item.id === slug) as ProjectItem;
    const {
        aboutMe: { social },
    } = data;

    return (
        <div>
            <Header name={data.aboutMe.name} />
            <MarketingWorkDetail projectDetail={projectDetail} theme={{ role: 'bg-white text-[#111111]' }} />
            {/* Testimonial Section */}
            <WhatClientsSayAboutMe data={data} />
            <Footer
                data={{
                    socials: [
                        {
                            icon: Assets.facebookIcon.src,
                            link: social.facebookLink,
                        },
                        {
                            icon: Assets.instagramIcon.src,
                            link: social.instagramLink,
                        },
                        {
                            icon: Assets.linkedInIcon.src,
                            link: social.linkedinLink,
                        },
                        {
                            icon: Assets.youtubeIcon.src,
                            link: social.youtubeLink,
                        },
                    ],
                }}
            />
        </div>
    );
}
