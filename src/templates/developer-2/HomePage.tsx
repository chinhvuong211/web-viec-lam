import { Assets } from '@/assets';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import AboutMe from '@/features/home/components/AboutMeSection';
import CommentSection from '@/features/home/components/CommentSection';
import HomeBanner from '@/features/home/components/HomeBanner';
import SkillSection from '@/features/home/components/SkillSection';
import TestimonialSection from '@/features/home/components/TestimonialSection';
import WorkSection from '@/features/home/components/WorkSection';

export default function DeveloperStyle2() {
    return (
        <div>
            <div>
                <Header theme={{ text: 'text-white', contact: 'border-white bg-transparent' }} />

                <HomeBanner bg={Assets.homeBannerGreen.src} />

                <WorkSection />

                {/* About Section */}
                <AboutMe />

                {/* Skills Section */}
                <SkillSection />

                {/* Testimonial Section */}
                <TestimonialSection
                    cardTheme={{
                        background: 'bg-slide-background',
                        description: 'text-[#E9E9E9]',
                        title: 'text-[#E5E8FA]',
                        position: 'text-[#E9E9E9]',
                    }}
                    activeDotClassName={'bg-black'}
                    inactiveDotClassName={'bg-[#C3C3C3]'}
                />

                {/* Comments Section */}
                <CommentSection />
            </div>
            <Footer
                theme={{
                    social: 'text-[#D2DEFC]',
                    message: '!text-white',
                    email: 'text-[#D2DEFC]',
                    copyright: 'text-[#BBBBBB]',
                    router: 'text-[#BBBBBB]',
                    routerContainer: 'green:border-t green:pt-5 green:border-[#CEDFFF1A]',
                }}
            />
        </div>
    );
}
