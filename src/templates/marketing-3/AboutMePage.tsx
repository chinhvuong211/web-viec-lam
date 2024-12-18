import { Assets } from '@/assets';
import MarketingAboutMe from '@/features/about-me/marketing/AboutMe';
import { MarketingData } from '@/features/common/interface';

import Footer from './components/Footer';
import Header from './components/Header';
import WhatClientsSayAboutMe from './components/WhatClientsSayAboutMe';

type Props = {
    data: MarketingData;
};

export default function Marketing2AboutMe(props: Props) {
    const { data } = props;
    const {
        aboutMe: { social },
    } = data;

    return (
        <div>
            <Header name={data.aboutMe.name} />
            <MarketingAboutMe
                data={data}
                theme={{ markColor: 'text-[#FF3C00]', markBgColor: 'bg-[#FF3C00]' }}
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
