import Header from '@/components/layout/Header';
import data from '@/data/data.json';
import AboutMe from '@/features/home/components/AboutMeSection';
import CommentSection from '@/features/home/components/CommentSection';
import HomeBanner from '@/features/home/components/HomeBanner';
import SkillSection from '@/features/home/components/SkillSection';
import { SlideCardTheme } from '@/features/home/components/SlideCard';
import TestimonialSection from '@/features/home/components/TestimonialSection';
import WorkSection from '@/features/home/components/WorkSection';
import { Theme } from '@/lib/constant';
import { getCookieTheme } from '@/lib/theme';
import { getBaseUrl } from '@/lib/utils';
const { aboutMe, skills } = data;
export async function generateMetadata() {
    const imageUrl = `${getBaseUrl()}/assets/images/profile/avatar.png`;

    return {
        robots: 'index, follow',
        metadataBase: new URL(getBaseUrl()),
        alternates: {
            canonical: '/',
            languages: {
                en: '/en',
                vi: '/vi',
            },
        },
        title: aboutMe.name,
        description: aboutMe.message.description,
        keywords: skills.map((item) => item.name).join(', '),
        twitter: {
            card: 'summary_large_image',
            title: aboutMe.name,
            description: 'meta_description',
            images: imageUrl,
        },
        openGraph: {
            type: 'website',
            title: aboutMe.name,
            images: imageUrl,
            siteName: aboutMe.name,
            description: 'meta_description',
            url: getBaseUrl(),
            countryName: 'Viet Nam',
        },
    };
}

function Index() {
    const theme = getCookieTheme();

    const mapTheme: Record<Theme, SlideCardTheme> = {
        [Theme.GREEN]: {
            background: 'bg-slide-background',
            description: 'text-[#E9E9E9]',
            title: 'text-[#E5E8FA]',
            position: 'text-[#E9E9E9]',
        },
        [Theme.LIGHT]: {
            background: '!bg-white border border-[#959595]',
            description: 'text-light-primary-text',
            title: 'text-light-primary-text',
            position: 'text-light-primary-text',
        },
        [Theme.DARK]: {
            background: 'bg-slide-background',
            description: 'text-[#E9E9E9]',
            title: 'text-[#E5E8FA]',
            position: 'text-[#E9E9E9]',
        },
    };

    const activeDotClassName = {
        [Theme.GREEN]: 'bg-white',
        [Theme.LIGHT]: 'bg-black',
        [Theme.DARK]: 'bg-white',
    };

    const inactiveDotClassName = {
        [Theme.GREEN]: 'bg-[#464646]',
        [Theme.LIGHT]: 'bg-[#C3C3C3]',
        [Theme.DARK]: 'bg-[#464646]',
    };

    return (
        <div>
            <Header />
            <HomeBanner />

            <WorkSection />

            {/* About Section */}
            <AboutMe />

            {/* Skills Section */}
            <SkillSection />

            {/* Testimonial Section */}
            <TestimonialSection
                cardTheme={mapTheme[theme]}
                activeDotClassName={activeDotClassName[theme]}
                inactiveDotClassName={inactiveDotClassName[theme]}
            />

            {/* Comments Section */}
            <CommentSection />
        </div>
    );
}

export default Index;
