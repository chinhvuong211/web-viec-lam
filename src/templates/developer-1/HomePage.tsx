import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import AboutMe from '@/features/home/components/AboutMeSection';
import CommentSection from '@/features/home/components/CommentSection';
import HomeBanner from '@/features/home/components/HomeBanner';
import SkillSection from '@/features/home/components/SkillSection';
import TestimonialSection from '@/features/home/components/TestimonialSection';
import WorkSection from '@/features/home/components/WorkSection';

export default function DeveloperStyle1() {
    return (
        <div>
            <div>
                <Header theme={{ text: 'text-white' }} />
                <HomeBanner />

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
                    activeDotClassName={'bg-white'}
                    inactiveDotClassName={'bg-[#464646]'}
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
                    routerContainer: 'light:pt-5 light:border-light-primary',
                }}
            />
        </div>
    );
}
