import AboutMe from '@/features/home/components/AboutMeSection';
import CommentSection from '@/features/home/components/CommentSection';
import HomeBanner from '@/features/home/components/HomeBanner';
import SkillSection from '@/features/home/components/SkillSection';
import TestimonialSection from '@/features/home/components/TestimonialSection';
import WorkSection from '@/features/home/components/WorkSection';

import Developer3Footer from './components/Footer';
import Developer3Header from './components/Header';
export default function DeveloperStyle3() {
    return (
        <div>
            <div>
                <Developer3Header />
                <HomeBanner />

                <WorkSection />

                {/* About Section */}
                <AboutMe />

                {/* Skills Section */}
                <SkillSection />

                {/* Testimonial Section */}
                <TestimonialSection
                    cardTheme={{
                        background: '!bg-white border border-[#959595]',
                        description: 'text-[#272626]',
                        title: 'text-[#272626]',
                        position: 'text-[#272626]',
                    }}
                    activeDotClassName={'bg-white'}
                    inactiveDotClassName={'bg-[#464646]'}
                />

                {/* Comments Section */}
                <CommentSection />
            </div>
            <Developer3Footer />
        </div>
    );
}
