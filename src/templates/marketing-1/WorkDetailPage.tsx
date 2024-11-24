import { Assets } from '@/assets';
import { MarketingData } from '@/features/common/interface';
import TestimonialSection from '@/features/home/marketing/TestimonialSection';
import MarketingWorkDetail from '@/features/work/detail/MarketingWorkDetail';
import { ProjectItem } from '@/features/work/interface';

import Footer from './components/Footer';
import Header from './components/Header';

type Props = {
    data: MarketingData;
    slug: string;
};
export default function Marketing1WorkDetailPage({ data, slug }: Props) {
    const projectDetail = data.projects.find((item) => item.id === slug) as ProjectItem;
    const {
        aboutMe: { social },
    } = data;

    return (
        <div>
            <Header name={data.aboutMe.name} />
            <MarketingWorkDetail projectDetail={projectDetail} />
            {/* Testimonial Section */}
            <TestimonialSection
                data={data.whatTheySaidAboutMe}
                cardTheme={{
                    background: '!bg-white shadow-xs',
                    description: 'text-[#595959]',
                    title: 'text-[#272626]',
                    position: 'text-[#595959]',
                }}
                activeDotClassName={'bg-[#272626]'}
                inactiveDotClassName={'bg-[#C3C3C3]'}
            />
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
