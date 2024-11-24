import React from 'react';

import { Assets } from '@/assets';
import { MarketingData } from '@/features/common/interface';
import AboutMe from '@/features/home/marketing/AboutMeSection';
import HomeBanner from '@/features/home/marketing/HomeBanner';
import SkillSection from '@/features/home/marketing/SkillSection';
import TestimonialSection from '@/features/home/marketing/TestimonialSection';
import WorkSection from '@/features/home/marketing/WorkSection';

import Footer from './components/Footer';
import Header from './components/Header';

type Props = {
    data: MarketingData;
};

function MarketingStyle1HomePage(props: Props) {
    const { data } = props;
    const {
        aboutMe: { social },
    } = data;

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
                data={data.aboutMe}
            />
            <WorkSection
                theme={{
                    background: 'bg-[#F4F4F4]',
                    btn: 'bg-[#272626] text-white',
                    projectCard: {
                        container: 'bg-white',
                    },
                }}
                data={data.projects}
            />

            <SkillSection data={data.skills} />

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

export default MarketingStyle1HomePage;
