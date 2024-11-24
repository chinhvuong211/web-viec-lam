import { Assets } from '@/assets';
import { Icon } from '@/components/base/icon/Icon';
import Image from '@/components/base/Image';
import { MarketingData } from '@/features/common/interface';
import { cn } from '@/lib/utils';

import EducationItem from './EducationItem';
import ExperienceItem from './ExperienceItem';

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
    ];

    return (
        <div className="max-w-screen-xxl mx-auto px-24 pb-24 pt-8 max-lg:px-4 max-lg:pb-10">
            <div
                className={cn(
                    'bg-white mt-[200px] text-[88px] font-semibold leading-[96.8px] tracking-[-0.01em] text-center mb-[120px]',
                    'max-lg:text-[40px] max-lg:leading-[43px] max-lg:mb-[60px] max-lg:mt-[75px]'
                )}
            >
                About Me
            </div>
            <div className="mt-6 flex gap-16 max-lg:flex-col max-lg:gap-8">
                <div className="flex-1 h-full grow ">
                    <div
                        className={cn(
                            'text-[24px] font-bold leading-[33.6px] mb-4',
                            'max-lg:text-[20px] max-lg:leading-[28px] max-lg:mb-3'
                        )}
                    >
                        Overview
                    </div>

                    <div className="bg-white rounded-[12px]">
                        <div
                            className={cn(
                                'text-[16px] font-normal leading-[21.6px] text-[#222222]',
                                'max-lg:text-[14px] max-lg:leading-[19px]'
                            )}
                        >
                            {overview.description}
                        </div>

                        <div
                            className={cn(
                                'text-[16px] font-normal leading-[21.6px] mt-4 text-[#222222]',
                                'max-lg:text-[14px] max-lg:leading-[19px]'
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
                                    className="w-5 h-5 text-[#FFBB24]"
                                    size={20}
                                />
                                <div
                                    className={cn(
                                        'text-[16px] font-normal leading-[20px] text-[#000000]',
                                        'max-lg:text-[14px] max-lg:leading-[19px]'
                                    )}
                                >
                                    {experience}
                                </div>
                            </div>
                        ))}
                    </div>

                    <Image
                        src={aboutMe.avatar}
                        width={441}
                        height={588}
                        className="object-cover h-full w-full mt-8 rounded-t-[6px] max-lg:block hidden"
                        alt={''}
                    />

                    <div
                        className={cn(
                            'text-[24px] font-bold leading-[33.6px] mb-4 mt-12',
                            'max-lg:text-[20px] max-lg:leading-[28px] max-lg:mt-8',
                            'max-lg:text-[#272626]'
                        )}
                    >
                        Experience
                    </div>
                    <div className="mt-5 flex flex-col gap-5">
                        {experiences.map((experience, index) => (
                            <ExperienceItem data={experience} key={index} />
                        ))}
                    </div>

                    <div className="mt-12">
                        <div
                            className={cn(
                                'text-[20px] font-bold leading-[28px]',
                                'max-lg:text-[20px] max-lg:leading-[28px]'
                            )}
                        >
                            Tool I can use
                        </div>
                        <div className="flex items-center gap-4 mt-5">
                            {tools.map((tool, index) => (
                                <Image src={tool} key={index} alt="" width={48} height={48} />
                            ))}
                        </div>
                    </div>

                    <div
                        className={cn(
                            'text-[24px] font-bold leading-[33.6px] mb-4 mt-12',
                            'max-lg:text-[20px] max-lg:leading-[28px]'
                        )}
                    >
                        Education
                    </div>

                    <div className="mt-5 flex flex-col gap-5 ">
                        {educations.map((education, index) => (
                            <EducationItem data={education} key={index} />
                        ))}
                    </div>
                </div>

                <div className="h-full w-[40%] max-lg:hidden">
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
