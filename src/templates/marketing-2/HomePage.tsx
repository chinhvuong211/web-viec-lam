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
        <div className="bg-white">
            <Header name={data.aboutMe.name} />
            <HomeBanner
                theme={{
                    primaryText: 'text-[#272626]',
                    secondaryText: 'text-[#9b9b9b]',
                    connectButton: 'bg-white text-[#272626]',
                    connectButtonText: 'text-white bg-[#272626]',
                    availabilityStatus: 'green:text-[#0F0F0F] green:bg-white',
                    banner1: Assets.marketingHomeBanner21.src,
                    banner2: Assets.marketingHomeBanner22.src,
                    banner3: Assets.marketingHomeBanner23.src,
                }}
            />

            {/* About Section */}
            <AboutMe
                theme={{
                    aboutMeBackground: 'bg-white',
                    cardBackground: 'bg-[#F6F6F6]',
                    markIcon: Assets.star2Icon.src,
                    markColor: 'text-[#B8E71D]',
                }}
                data={data.aboutMe}
            />

            <WorkSection
                theme={{
                    background: 'bg-white',
                    btn: 'bg-[#272626] text-white',
                    projectCard: {
                        container: '!bg-[#F6F6F6]',
                    },
                }}
                data={data.projects}
            />

            <SkillSection data={data.skills} />
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
