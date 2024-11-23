import MarketingFooter from "@/components/layout/MarketingFooter";
import MarketingHeader from "@/components/layout/MarketingHeader";
import { MarketingData } from "@/features/common/interface";
import ProjectCard from "@/features/home/marketing/ProjectCard";
import WorkFilter from "@/features/work/marketing/WorkFilter";
import Marketing1Footer from "./components/Footer";
import { Assets } from "@/assets";
import Header from "./components/Header";

type Props = {
    data: MarketingData;
};

export default function Marketing1WorkPage(props: Props) {
    const { data } = props;
    const { projects, aboutMe: { social } } = data;
    return (
        <div className="">
            <div className="max-w-screen-xxl mx-auto px-24 pb-24 pt-8 max-lg:px-5">
                <Header
                    name={data.aboutMe.name}
                />

                <div className="bg-white mt-[200px] text-[88px] font-semibold leading-[96.8px] tracking-[-0.01em] text-center mb-[120px]">
                    Featured works
                </div>
                <WorkFilter />
                <div className="gap-10 flex flex-col">
                    {projects?.map((item) => <ProjectCard key={item.id} item={item} theme={{ container: 'shadow-inset' }} />)}
                </div>


            </div>

            <Marketing1Footer data={{
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
            }} />
        </div>
    );
}
