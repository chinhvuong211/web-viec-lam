import { Assets } from '@/assets';
import { Icon } from '@/components/base/icon/Icon';
import Image from '@/components/base/Image';
import data from '@/data/marketing.json';
import { cn } from '@/lib/utils';

const { aboutMe } = data;

type Props = {
    theme: {
        aboutMeBackground: string;
    };
    data: {
        overview: {
            description: string;
            experiences: string[];
            tools: string[];
        };
    }
};

const tools = [
    Assets.photoshopIcon,
    Assets.figmaIcon,
    Assets.canvaIcon,
    Assets.capcutIcon,
    Assets.notionIcon,
];

function AboutMe({ theme, data }: Props) {
    return (
        <section className={cn(theme.aboutMeBackground, 'rounded-t-[48px] max-lg:rounded-t-[32px]')}>
            <div className="max-w-screen-xxl mx-auto p-24 max-lg:px-5 max-lg:py-10 ">
                <div className="text-[60px] font-semibold leading-[72px] tracking-[-0.01em] max-lg:text-[36px] max-lg:leading-[43px]">
                    About Me
                </div>
                <div className="mt-6 flex gap-6 max-lg:flex-col max-lg:gap-3 max-lg:mt-3">
                    <div className="flex-1 h-full grow ">
                        <div className="bg-white rounded-[12px] p-8 max-lg:p-4">
                            <div className="text-[16px] font-normal leading-[21.6px] text-[#222222] max-lg:text-[14px] max-lg:leading-[18px]">
                                {data.overview.description}
                            </div>

                            <div className="text-[16px] font-normal leading-[21.6px] mt-4 text-[#222222] max-lg:mt-3 max-lg:text-[14px] max-lg:leading-[18px]">
                                I have experience in:
                            </div>

                            <div className="flex items-center gap-4 mt-3">
                                <Icon
                                    url={Assets.circleCheckIcon.src}
                                    className="w-5 h-5 text-[#FFBB24]"
                                    size={20}
                                />
                                <div className="text-[16px] font-normal leading-[20px] text-[#000000] max-lg:text-[14px] max-lg:leading-[18px]">
                                    Social Media Manager Giggling Platypus Co
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-3">
                                <Icon
                                    url={Assets.circleCheckIcon.src}
                                    className="w-5 h-5 text-[#FFBB24]"
                                    size={20}
                                />
                                <div className="text-[16px] font-normal leading-[20px] text-[#000000] max-lg:text-[14px] max-lg:leading-[18px]">
                                    Social Media Specialist Larana, Inc
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-6 max-lg:flex-col max-lg:gap-3 max-lg:mt-3">
                            <div className=" bg-white rounded-[12px] px-8 py-6 max-lg:w-full max-lg:px-5 max-lg:py-5">
                                <div className="flex items-center gap-2">
                                    <span className="font-extrabold text-[64px] leading-[46px] max-lg:text-[48px] max-lg:leading-[35px]">
                                        5
                                    </span>
                                    <span className="font-bold text-[28px] leading-[39.2px] max-lg:text-[20px] max-lg:leading-[26px]">
                                        years experience
                                    </span>
                                </div>
                                <div className={
                                    cn(
                                        'text-[16px] leading-[28px] font-normal mt-2 text-[#535353]',
                                        'max-lg:mt-1.5 max-lg:text-[14px] max-lg:leading-[28px]',
                                    )
                                }>
                                    as a Digital Marketing Freelancer
                                </div>
                            </div>

                            <div className=" bg-white rounded-[12px] px-8 py-6 max-lg:w-full max-lg:px-5 max-lg:py-5">
                                <div className="text-[20px] font-bold leading-[28px] max-lg:text-[16px] max-lg:leading-[21px]">
                                    Tool I can use
                                </div>
                                <div className="flex items-center gap-4 mt-3 max-lg:mt-1.5 ">
                                    {tools.map((tool, index) => (
                                        <Image
                                            src={tool}
                                            key={index}
                                            alt=""
                                            width={48}
                                            height={48}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-full aspect-[441/588]">
                        <Image
                            src={aboutMe.avatar}
                            width={441}
                            height={588}
                            className="object-cover h-full max-lg:aspect-[335/229] max-lg:min-w-full rounded-t-[6px]"
                            alt={''}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
