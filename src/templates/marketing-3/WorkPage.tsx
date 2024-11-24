import { Assets } from '@/assets';
import { MarketingData } from '@/features/common/interface';
import WorkSection from '@/features/work/marketing/WorkSection';

import Marketing1Footer from './components/Footer';
import Header from './components/Header';
import WhatClientsSayAboutMe from './components/WhatClientsSayAboutMe';

type Props = {
    data: MarketingData;
};

export default function Marketing3WorkPage(props: Props) {
    const { data } = props;
    const {
        projects,
        aboutMe: { social },
    } = data;
    return (
        <div>
            <Header name={data.aboutMe.name} />

            <WorkSection
                projects={projects}
                theme={{
                    btn: 'bg-[#272626] text-white',
                    projectCard: {
                        container: '!bg-white',
                        primaryText: 'text-[#272626]',
                        secondaryText: 'text-[#11111199]',
                    },
                    container: 'bg-[#F1F1F1]',
                }}
            />
            <WhatClientsSayAboutMe data={data} />
            <Marketing1Footer
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
