import Image from '@/components/base/Image';
import data from '@/data/marketing.json';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/base/icon/Icon';
import { Assets } from '@/assets';

const { aboutMe } = data;

type Props = {
    theme: {
        aboutMeBackground: string;
    }
}

const tools = [
    Assets.photoshopIcon,
    Assets.figmaIcon,
    Assets.canvaIcon,
    Assets.capcutIcon,
    Assets.notionIcon,
]

function AboutMe({ theme }: Props) {
    return (
        <section className={cn(theme.aboutMeBackground, 'rounded-t-[48px]')}>
            <div className="max-w-screen-xxl mx-auto p-24 max-lg:px-5 max-lg:py-10 ">
                <div className='text-[60px] font-semibold leading-[72px] tracking-[-0.01em]'>
                    About Me
                </div>
                <div className="mt-6 flex gap-6 max-lg:flex-col max-lg:gap-8">

                    <div className='flex-1 h-full grow '>
                        <div className="bg-white rounded-[12px] p-8">
                            <div className="text-[16px] font-normal leading-[21.6px] text-[#222222]">
                                I’m a digital marketing professional with five years of experience specializing in creating impactful marketing strategies and driving growth through data-driven decisions. My expertise spans across SEO, social media management, content marketing, and paid advertising, allowing me to build comprehensive campaigns tailored to diverse target audiences. With a strong background in analytics and market research, I focus on optimizing conversion rates and enhancing brand visibility. I am passionate about leveraging digital tools and platforms to deliver measurable results and help brands connect more effectively with their audience.

                            </div>

                            <div className="text-[16px] font-normal leading-[21.6px] mt-4 text-[#222222]">
                                I have experience in:
                            </div>

                            <div className='flex items-center gap-4 mt-3'>
                                <Icon
                                    url={Assets.circleCheckIcon.src}
                                    className="w-5 h-5 text-[#FFBB24]"
                                    size={20}
                                />
                                <div className='text-[16px] font-normal leading-[20px] text-[#000000]'>
                                    Social Media Manager Giggling Platypus Co
                                </div>
                            </div>
                            <div className='flex items-center gap-4 mt-3'>
                                <Icon
                                    url={Assets.circleCheckIcon.src}
                                    className="w-5 h-5 text-[#FFBB24]"
                                    size={20}
                                />
                                <div className='text-[16px] font-normal leading-[20px] text-[#000000]'>
                                    Social Media Specialist Larana, Inc
                                </div>
                            </div>
                        </div>

                        <div className='mt-4 flex items-center gap-6'>
                            <div className=' bg-white rounded-[12px] px-8 py-6'>
                                <div className='flex items-center gap-2'>
                                    <span className='font-extrabold text-[64px] leading-[46px] '>5</span>
                                    <span className='font-bold text-[28px] leading-[39.2px] '>
                                        years experience
                                    </span>
                                </div>
                                <div className='text-[16px] leading-[28px] font-normal mt-2'>
                                    as a Digital Marketing Freelancer
                                </div>
                            </div>

                            <div className=' bg-white rounded-[12px] px-8 py-6'>
                                <div className='text-[20px] font-bold leading-[28px] '>
                                    Tool I can use
                                </div>
                                <div className='flex items-center gap-4 mt-3'>
                                    {tools.map((tool, index) => (
                                        <Image src={tool} key={index} alt="" width={48} height={48} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='h-full aspect-[441/588]'>
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
