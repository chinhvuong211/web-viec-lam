import React from 'react';

import { Assets } from '@/assets';
import MarketingFooter from '@/components/layout/MarketingFooter';
import MarketingHeader from '@/components/layout/MarketingHeader';
import AboutMeSection from '@/features/about-me/components/AboutMeSection';
import EducationSection from '@/features/about-me/components/EducationSection';
import ExperienceSection from '@/features/about-me/components/ExperienceSection';
import { MarketingData } from '@/features/common/interface';
import AboutMe from '@/features/home/marketing/AboutMeSection';
import CommentSection from '@/features/home/components/CommentSection';
import HomeBanner from '@/features/home/marketing/HomeBanner';
import TestimonialSection from '@/features/home/components/TestimonialSection';
import WorkSection from '@/features/home/marketing/WorkSection';
import { Theme } from '@/lib/constant';
import { getCookieTheme } from '@/lib/theme';
import Marketing1Footer from './components/Footer';
import Header from './components/Header';
import Footer from './components/Footer';


type Props = {
    data: MarketingData;
};

function MarketingStyle1HomePage(props: Props) {
    const { data } = props;
    const { aboutMe: { social } } = data;

    return (
        <div className="bg-white">
            <Header name={data.aboutMe.name} />
            <HomeBanner
                theme={{
                    primaryText: 'text-[#272626]',
                    secondaryText: 'text-[#9b9b9b]',
                    connectButton: 'bg-white text-[#272626]',
                    connectButtonText: 'text-white bg-[#272626]',
                    availabilityStatus: 'green:text-[#0F0F0F] green:bg-white',
                }}
            />


            {/* About Section */}
            <AboutMe
                theme={{
                    aboutMeBackground: 'bg-[#F4F4F4]',
                }}
            />
            <WorkSection
                theme={{
                    background: 'bg-[#F4F4F4]',
                    btn: 'bg-white text-black',
                }}
                data={data.projects}
            />

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

export default MarketingStyle1HomePage;
