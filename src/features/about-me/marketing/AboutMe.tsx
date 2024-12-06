import { Assets } from '@/assets';
import { Icon } from '@/components/base/icon/Icon';
import Image from '@/components/base/Image';
import { MarketingData } from '@/features/common/interface';
import { cn } from '@/lib/utils';

import EducationItem from './EducationItem';
import ExperienceItem from './ExperienceItem';
import ImageCard from './ImageCard';
import ImageGalary from './ImageGalary';

export type AboutMeTheme = {
    markColor?: string;
    markBgColor?: string;
    viewMoreBtn?: string;
};
type Props = {
    data: MarketingData;
    theme?: AboutMeTheme;
};

export default function MarketingAboutMe(props: Props) {
    const { data, theme } = props;
    const { aboutMe, experiences, educations } = data;
    const { overview } = aboutMe;
    const {
        markColor = 'text-[#FFBB24]',
        markBgColor = 'bg-[#FFBB24]',
        viewMoreBtn = 'bg-[#272626] text-white',
    } = theme || {};

    const tools = [
        Assets.figmaIcon.src,
        Assets.photoshopIcon.src,
        Assets.canvaIcon.src,
        Assets.capcutIcon.src,
        Assets.notionIcon.src,
    ];

    return (
        <div className="max-w-screen-xxl mx-auto px-24 pb-24 pt-8 max-lg:px-4 max-lg:pb-10">
            <div
                className={cn(
                    'bg-white mt-[12.5rem] text-[5.5rem] font-semibold leading-[6.05rem] tracking-[-0.01em] text-center mb-[7.5rem]',
                    'max-lg:text-[2.5rem] max-lg:leading-[2.688rem] max-lg:mb-[3.75rem] max-lg:mt-[4.688rem]'
                )}
            >
                About Me
            </div>
            <div className="mt-6 flex gap-16 max-lg:flex-col max-lg:gap-8">
                <div className="flex-1 h-full grow ">
                    <div
                        className={cn(
                            'text-[1.5rem] font-bold leading-[2.1rem] mb-4',
                            'max-lg:text-[1.25rem] max-lg:leading-[1.75rem] max-lg:mb-3'
                        )}
                    >
                        Overview
                    </div>

                    <div className="bg-white rounded-[0.75rem]">
                        <div
                            className={cn(
                                'text-[1rem] font-normal leading-[1.35rem] text-[#222222]',
                                'max-lg:text-[0.875rem] max-lg:leading-[1.188rem]'
                            )}
                        >
                            {overview.description}
                        </div>

                        <div
                            className={cn(
                                'text-[1rem] font-normal leading-[1.35rem] mt-4 text-[#222222]',
                                'max-lg:text-[0.875rem] max-lg:leading-[1.188rem]'
                            )}
                        >
                            I have experience in:
                        </div>

                        {overview.experiences.map((experience, index) => (
                            <div
                                className={cn('flex items-center gap-4 mt-3', 'max-lg:mt-2')}
                                key={index}
                            >
                                <Icon
                                    url={Assets.circleCheckIcon.src}
                                    className={cn('w-5 h-5', markColor)}
                                    size={20}
                                />
                                <div
                                    className={cn(
                                        'text-[1rem] font-normal leading-[1.25rem] text-[#000000]',
                                        'max-lg:text-[0.875rem] max-lg:leading-[1.188rem]'
                                    )}
                                >
                                    {experience}
                                </div>
                            </div>
                        ))}
                    </div>

                    <ImageCard
                        url={aboutMe.avatar}
                        className="object-cover h-full w-full mt-8 rounded-t-[0.375rem] max-lg:block hidden"
                    />

                    <div
                        className={cn(
                            'text-[1.5rem] font-bold leading-[2.1rem] mb-4 mt-12',
                            'max-lg:text-[1.25rem] max-lg:leading-[1.75rem] max-lg:mt-8',
                            'max-lg:text-[#272626]'
                        )}
                    >
                        Experience
                    </div>
                    <div className="mt-5 flex flex-col gap-5">
                        {experiences.map((experience, index) => (
                            <ExperienceItem data={experience} key={index} theme={{ markBgColor }} />
                        ))}
                    </div>

                    <div className="mt-12">
                        <div
                            className={cn(
                                'text-[1.25rem] font-bold leading-[1.75rem]',
                                'max-lg:text-[1.25rem] max-lg:leading-[1.75rem]'
                            )}
                        >
                            Tool I can use
                        </div>
                        <div className="flex items-center gap-4 mt-5">
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

                    <div
                        className={cn(
                            'text-[1.5rem] font-bold leading-[2.1rem] mb-4 mt-12',
                            'max-lg:text-[1.25rem] max-lg:leading-[1.75rem]'
                        )}
                    >
                        Education
                    </div>

                    <div className="mt-5 flex flex-col gap-5 ">
                        {educations.map((education, index) => (
                            <EducationItem data={education} key={index} theme={{ markBgColor }} />
                        ))}
                    </div>
                </div>

                <div className="h-full w-[40%] max-lg:hidden">
                    <ImageGalary url={aboutMe.avatar} url2={aboutMe.avatar} />
                </div>
            </div>

            <button
                className={cn(
                    'text-[1.125rem] mx-auto mt-6 max-lg:mt-14 px-7 py-4 rounded-[0.5rem] leading-[1.4625rem] font-medium text-start flex items-center gap-2 max-lg:text-[1rem] max-lg:leading-[1.3rem]',
                    'max-lg:block hidden',
                    viewMoreBtn
                )}
            >
                Contact now
            </button>
        </div>
    );
}
