import { MarketingData } from "@/features/common/interface";
import Header from "./components/Header";
import MarketingAboutMe from "@/features/about-me/marketing/AboutMe";
import Footer from "./components/Footer";
import { Assets } from "@/assets";

type Props = {
    data: MarketingData;
};

export default function Marketing1AboutMe(props: Props) {
    const { data } = props;
    const { aboutMe: { social } } = data;


    return (
        <div>
            <Header name={data.aboutMe.name} />
            <MarketingAboutMe data={data} />
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
