import Link from 'next/link';

import Button from '@/components/base/button/Button';
import { TextTitle } from '@/components/TextTitle';
import data from '@/data/developer.json';
import ProjectCard from '@/features/work/components/ProjectCard';

function WorkSection() {
    return (
        <section className="bg-theme-background">
            <div className="max-w-screen-xxl mx-auto px-24 pb-24 pt-8 max-lg:px-5">
                <div className="flex items-end justify-between max-lg:flex-col max-lg:items-start max-lg:gap-2 border-b green:border-[#CEDFFF1A] pb-3 light:border-[#2726264D] dark:border-transparent">
                    <TextTitle title={'MY PROJECT'} />
                    <h2 className="text-style-1 text-title-h2 max-lg:text-md-title-h2">
                        SELECTED WORK
                    </h2>
                </div>
                <div className="mt-8 flex justify-between gap-24 max-lg:flex-col max-lg:gap-10">
                    <div className="mt-12 max-lg:mt-0">
                        <div className="text-white text-normal-24 max-lg:text-md-body-16 light:text-light-primary">
                            {data.overview.description}
                        </div>

                        <Link href={'/work'}>
                            <Button
                                label={'View all'}
                                className="max-h-12 px-7 py-3 mt-10 max-lg:mt-6"
                            />
                        </Link>
                    </div>
                    <div className="gap-6 flex-center max-lg:flex-col max-lg:gap-8 ">
                        {data.projects.slice(0, 2).map((item, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    item={item}
                                    imageProps={{
                                        width: 372,
                                        height: 372,
                                        className:
                                            'w-full aspect-[1/1] min-w-[23.25rem] max-xl:min-w-[12.5rem]',
                                    }}
                                    className="w-full max-lg:w-full"
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="mt-8 flex items-start gap-6 max-lg:flex-col max-lg:gap-8 w-full">
                    <ProjectCard
                        item={data.projects[2]}
                        imageProps={{
                            width: 720,
                            height: 457,
                            className: 'aspect-[720/457] w-full grow max-lg:aspect-[1/1]',
                        }}
                        className="grow max-lg:w-full"
                    />
                    <ProjectCard
                        item={data.projects[3]}
                        imageProps={{
                            width: 504,
                            height: 350,
                            className: 'aspect-[504/350] w-full grow max-lg:aspect-[1/1]',
                        }}
                        className="w-[40%] max-lg:w-full"
                    />
                </div>
            </div>
        </section>
    );
}

export default WorkSection;
