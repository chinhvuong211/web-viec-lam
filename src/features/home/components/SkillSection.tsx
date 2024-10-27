import Image from '@/components/base/Image';
import TagItem from '@/components/TagItem';
import { TextTitle } from '@/components/TextTitle';
import data from '@/data/data.json';
import { cn } from '@/lib/utils';

const NumberPlus = (props: { number: number; text: string }) => {
    return (
        <div className="flex items-start gap-2">
            <div className="flex items-start gap-2">
                <h3 className="text-style-1 text-[80px] font-[800] leading-[112px]">
                    {props.number}
                </h3>
                <div className="text-style-1 text-[40px] font-[800] leading-[56px]">+</div>
            </div>

            <div
                className={cn(
                    'pt-16 text-[#E9E9E9] text-body-18',
                    'light:text-[#535353]',
                    'dark:text-[#E9E9E9]',
                    'green:text-[#E9E9E9]'
                )}
            >
                {props.text}
            </div>
        </div>
    );
};

function SkillSection() {
    return (
        <section className="bg-theme-background p-24 max-lg:px-5 max-lg:py-10">
            <div className="flex justify-between max-lg:flex-col max-lg:gap-10">
                <div>
                    <TextTitle title={'SKILLS'} />
                    <div className="sticky top-[100px] w-fit pt-10 max-lg:pt-6">
                        <div className="border-b border-[#CEDFFF1A] pb-5 light:border-[#2726264D]">
                            <NumberPlus number={data.client.number} text={data.client.label} />
                        </div>
                        <div className="pt-5">
                            <NumberPlus number={data.project.number} text={data.project.label} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    {data.skills.map((item, index) => {
                        return (
                            <div
                                className={cn(
                                    'flex gap-2 border-b pb-5 max-lg:flex-col',
                                    index !== data.skills.length - 1
                                        ? ' border-[#CEDFFF1A] light:border-[#2726264D]'
                                        : 'border-transparent'
                                )}
                                key={index}
                            >
                                <div className="flex grow flex-col justify-between max-lg:gap-4">
                                    <div className="text-[#DEE4EC] text-body-14 light:text-light-primary">
                                        {index < 10 && '0'}
                                        {index + 1}
                                    </div>
                                    <div className="max-lg:flex max-lg:flex-col max-lg:gap-4">
                                        <div className="text-[#F2F2F2] text-body-14 max-lg:text-normal-14 light:text-light-primary">
                                            {item.name.toUpperCase()}
                                        </div>

                                        <div className="mt-4 flex max-w-[30vw] flex-wrap gap-2 max-lg:max-w-full">
                                            {item.technologies.map((item) => (
                                                <TagItem key={item} label={item} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="max-lg:mt-8">
                                    <Image
                                        src={item.imageUrl}
                                        width={300}
                                        height={169}
                                        alt={item.name}
                                        className="aspect-[300/169] object-contain max-lg:w-full"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default SkillSection;
