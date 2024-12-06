import { Assets } from '@/assets';
import { Icon } from '@/components/base/icon/Icon';
import Image from '@/components/base/Image';
import data from '@/data/marketing.json';
import ImageCard from '@/features/about-me/marketing/ImageCard';
import { cn } from '@/lib/utils';

const { aboutMe } = data;

type Props = {
    theme: {
        aboutMeBackground: string;
        cardBackground?: string;
        markIcon?: string;
        markColor?: string;
    };
    data: {
        overview: {
            description: string;
            experiences: string[];
            tools: string[];
        };
    };
};

const tools = [
    Assets.photoshopIcon,
    Assets.figmaIcon,
    Assets.canvaIcon,
    Assets.capcutIcon,
    Assets.notionIcon,
];

function AboutMe({ theme, data }: Props) {
    const {
        cardBackground = 'bg-white',
        markIcon = Assets.circleCheckIcon.src,
        markColor = 'text-[#FFBB24]',
    } = theme;
    return (
        <section
            className={cn(theme.aboutMeBackground, 'rounded-t-[3rem] max-lg:rounded-t-[2rem]')}
        >
            <div className="max-w-screen-xxl mx-auto p-24 max-lg:px-5 max-lg:py-10 ">
                <div className="text-[3.75rem] font-semibold leading-[4.5rem] tracking-[-0.01em] max-lg:text-[2.25rem] max-lg:leading-[2.6875rem]">
                    About Me
                </div>
                <div className="mt-6 flex gap-6 max-lg:flex-col max-lg:gap-3 max-lg:mt-3">
                    <div className="flex-1 grow flex flex-col">
                        <div
                            className={cn(
                                'rounded-[0.75rem] p-8 max-lg:p-4 flex-1',
                                cardBackground
                            )}
                        >
                            <div className="text-[1rem] font-normal leading-[1.35rem] text-[#222222] max-lg:text-[0.875rem] max-lg:leading-[1.125rem]">
                                {data.overview.description}
                            </div>

                            <div className="text-[1rem] font-normal leading-[1.35rem] mt-4 text-[#222222] max-lg:mt-3 max-lg:text-[0.875rem] max-lg:leading-[1.125rem]">
                                I have experience in:
                            </div>

                            <div className="flex items-center gap-4 mt-3">
                                <Icon
                                    url={markIcon}
                                    className={cn('w-5 h-5', markColor)}
                                    size={20}
                                />
                                <div className="text-[1rem] font-normal leading-[1.25rem] text-[#000000] max-lg:text-[0.875rem] max-lg:leading-[1.125rem]">
                                    Social Media Manager Giggling Platypus Co
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-3">
                                <Icon
                                    url={markIcon}
                                    className={cn('w-5 h-5', markColor)}
                                    size={20}
                                />
                                <div className="text-[1rem] font-normal leading-[1.25rem] text-[#000000] max-lg:text-[0.875rem] max-lg:leading-[1.125rem]">
                                    Social Media Specialist Larana, Inc
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-6 max-lg:flex-col max-lg:gap-3 max-lg:mt-3">
                            <div
                                className={cn(
                                    'rounded-[0.75rem] px-8 py-6 max-lg:w-full max-lg:px-5 max-lg:py-5 w-full',
                                    cardBackground
                                )}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="font-extrabold text-[4rem] leading-[2.875rem] max-lg:text-[3rem] max-lg:leading-[2.1875rem]">
                                        5
                                    </span>
                                    <span className="font-bold text-[1.75rem] leading-[2.45rem] max-lg:text-[1.25rem] max-lg:leading-[1.625rem]">
                                        years experience
                                    </span>
                                </div>
                                <div
                                    className={cn(
                                        'text-[1rem] leading-[1.75rem] font-normal mt-2 text-[#535353]',
                                        'max-lg:mt-1.5 max-lg:text-[0.875rem] max-lg:leading-[1.75rem]'
                                    )}
                                >
                                    as a Digital Marketing Freelancer
                                </div>
                            </div>

                            <div
                                className={cn(
                                    'rounded-[0.75rem] px-8 py-6 max-lg:w-full max-lg:px-5 max-lg:py-5 w-full',
                                    cardBackground
                                )}
                            >
                                <div className="text-[1.25rem] font-bold leading-[1.75rem] max-lg:text-[1rem] max-lg:leading-[1.3125rem]">
                                    Tool I can use
                                </div>
                                <div className="flex items-center gap-4 mt-3 max-lg:mt-1.5">
                                    {tools.map((tool, index) => (
                                        <Image
                                            src={tool}
                                            key={index}
                                            alt=""
                                            width={48}
                                            height={48}
                                            className="w-12 h-12"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-full ">
                        <ImageCard
                            url={aboutMe.avatar}
                            className="object-cover max-lg:aspect-[335/229] max-lg:min-w-full rounded-t-[0.375rem] w-[26rem] max-lg:w-full "
                            showGhim
                            ghimClassName="max-lg:hidden"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
