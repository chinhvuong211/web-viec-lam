import { Assets } from '@/assets';
import { MarketingData } from '@/features/common/interface';
import AboutMe from '@/features/home/marketing/AboutMeSection';
import HomeBanner from '@/features/home/marketing/HomeBanner';
import SkillSection from '@/features/home/marketing/SkillSection';
import WorkSection from '@/features/home/marketing/WorkSection';

import Footer from './components/Footer';
import Header from './components/Header';
import WhatClientsSayAboutMe from './components/WhatClientsSayAboutMe';

type Props = {
    data: MarketingData;
};

export default function Marketing2HomePage(props: Props) {
    const { data } = props;
    const {
        aboutMe: { social },
    } = data;

    return (
        <div className="bg-[#F4F4F4]">
            <Header name={data.aboutMe.name} />
            <HomeBanner
                theme={{
                    primaryText: 'text-[#272626]',
                    secondaryText: 'text-[#272626]',
                    connectButton: 'bg-white text-[#272626]',
                    connectButtonText: 'text-white bg-[#272626]',
                    availabilityStatus: 'green:text-[#0F0F0F] green:bg-white',
                    banner1: Assets.marketingHomeBanner31.src,
                    banner2: Assets.marketingHomeBanner32.src,
                    banner3: Assets.marketingHomeBanner33.src,
                    highlightText: 'text-[#FF3C00]',
                }}
            />

            {/* About Section */}
            <AboutMe
                theme={{
                    aboutMeBackground: 'bg-[#F4F4F4]',
                    cardBackground: 'bg-white',
                    markIcon: Assets.circleCheckIcon.src,
                    markColor: 'text-[#FF3C00]',
                }}
                data={data.aboutMe}
            />

            <WorkSection
                theme={{
                    background: 'bg-[#F4F4F4]',
                    btn: 'bg-[#272626] text-white',
                    projectCard: {
                        container: '!bg-[#111111]',
                        primaryText: 'text-white',
                        secondaryText: 'text-[#F1F1F1]',
                    },
                }}
                data={data.projects}
            />

            <SkillSection
                data={data.skills}
                theme={{
                    title: 'bg-white',
                    activeBg: 'bg-white',
                    containerBackground: 'bg-[#F6F6F6]',
                }}
            />
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
