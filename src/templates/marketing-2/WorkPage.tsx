import { Assets } from '@/assets';
import { MarketingData } from '@/features/common/interface';
import WorkSection from '@/features/work/marketing/WorkSection';

import Marketing1Footer from './components/Footer';
import Header from './components/Header';
import WhatClientsSayAboutMe from './components/WhatClientsSayAboutMe';

type Props = {
    data: MarketingData;
};

export default function Marketing2WorkPage(props: Props) {
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
                        container: 'shadow-[inset_0px_0px_20px_4px_rgba(0,0,0,0.10)]',
                    },
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
