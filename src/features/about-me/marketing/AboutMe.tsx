import { MarketingData } from "@/features/common/interface";
import { Assets } from "@/assets";
import Image from "@/components/base/Image";
import { Icon } from "@/components/base/icon/Icon";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";

type Props = {
    data: MarketingData;
};

export default function MarketingAboutMe(props: Props) {
    const { data } = props;
    const { aboutMe, experiences, educations } = data;
    const { overview } = aboutMe;

    const tools = [
        Assets.figmaIcon.src,
        Assets.photoshopIcon.src,
        Assets.canvaIcon.src,
        Assets.capcutIcon.src,
        Assets.notionIcon.src,
    ]

    return (
        <div className="max-w-screen-xxl mx-auto px-24 pb-24 pt-8 max-lg:px-5">
            <div className="bg-white mt-[200px] text-[88px] font-semibold leading-[96.8px] tracking-[-0.01em] text-center mb-[120px]">
                About Me
            </div>
            <div className="mt-6 flex gap-16 max-lg:flex-col max-lg:gap-8">
                <div className='flex-1 h-full grow '>
                    <div className="text-[24px] font-bold leading-[33.6px] mb-4">
                        Overview
                    </div>

                    <div className="bg-white rounded-[12px]">


                        <div className="text-[16px] font-normal leading-[21.6px] text-[#222222]">
                            {overview.description}
                        </div>

                        <div className="text-[16px] font-normal leading-[21.6px] mt-4 text-[#222222]">
                            I have experience in:
                        </div>

                        {
                            overview.experiences.map((experience, index) => (
                                <div className='flex items-center gap-4 mt-3' key={index}>
                                    <Icon
                                        url={Assets.circleCheckIcon.src}
                                        className="w-5 h-5 text-[#FFBB24]"
                                        size={20}
                                    />
                                    <div className='text-[16px] font-normal leading-[20px] text-[#000000]'>
                                        {experience}
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                    <div className='text-[24px] font-bold leading-[33.6px] mb-4 mt-12'>
                        Experience

                    </div>
                    <div className="mt-5 flex flex-col gap-5">
                        {
                            experiences.map((experience, index) => (
                                <ExperienceItem data={experience} key={index} />
                            ))
                        }
                    </div>

                    <div className='mt-12'>
                        <div className='text-[20px] font-bold leading-[28px] '>
                            Tool I can use
                        </div>
                        <div className='flex items-center gap-4 mt-5'>
                            {tools.map((tool, index) => (
                                <Image src={tool} key={index} alt="" width={48} height={48} />
                            ))}
                        </div>
                    </div>

                    <div className='text-[24px] font-bold leading-[33.6px] mb-4 mt-12'>
                        Education
                    </div>

                    <div className="mt-5 flex flex-col gap-5 ">
                        {
                            educations.map((education, index) => (
                                <EducationItem data={education} key={index} />
                            ))
                        }
                    </div>

                </div>

                <div className='h-full w-[40%]'>
                    <Image
                        src={aboutMe.avatar}
                        width={441}
                        height={588}
                        className="object-cover h-full w-full max-lg:min-w-full rounded-t-[6px]"
                        alt={''}
                    />
                </div>
            </div>
        </div>
    );
}
