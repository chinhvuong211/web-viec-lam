import React from 'react';

import { Assets } from '@/assets';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
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

const bgMapping = {
    [Theme.DEVELOPER_1]: '',
    [Theme.DEVELOPER_3]: '',
    [Theme.DEVELOPER_2]: Assets.backgroundGreen.src,
};
type Props = {
    data: MarketingData;
};

function MarketingStyle1HomePage(props: Props) {
    const { data } = props;
    const { aboutMe: { social } } = data;
    const bg = bgMapping[getCookieTheme()];

    return (
        <div>
            <div
                className="bg-white"
            >
                <MarketingHeader
                    theme={{
                        text: 'text-white',
                        background: 'bg-black',
                        contact: 'bg-white text-black',
                    }}
                    name={data.aboutMe.name}
                />
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

            </div>
            <MarketingFooter
                theme={{
                    social: 'text-[#D2DEFC]',
                    message: '!text-white',
                    email: 'text-white',
                    copyright: 'text-[#BBBBBB]',
                    router: 'text-[#BBBBBB]',
                    routerContainer: 'light:pt-5 light:border-light-primary',
                    btn: 'bg-white text-black',
                    divider: 'border-white',
                    contact: 'text-[#E8E8E8]',
                }}
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
