import Header from '@/components/layout/Header';
import data from '@/data/data.json';
import AboutMe from '@/features/home/components/AboutMeSection';
import CommentSection from '@/features/home/components/CommentSection';
import HomeBanner from '@/features/home/components/HomeBanner';
import SkillSection from '@/features/home/components/SkillSection';
import WorkSection from '@/features/home/components/WorkSection';
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
    return (
        <div>
            <Header />
            <HomeBanner />

            <WorkSection />

            {/* About Section */}
            <AboutMe />

            {/* Skills Section */}
            <SkillSection />

            {/* Comments Section */}
            <CommentSection />
        </div>
    );
}

export default Index;
