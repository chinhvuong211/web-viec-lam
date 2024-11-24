import Link from 'next/link';

import { Assets } from '@/assets';
import { Icon } from '@/components/base/icon/Icon';
import { ProjectItem } from '@/features/work/interface';
import { cn } from '@/lib/utils';

import ProjectCard from './ProjectCard';

type Props = {
    theme: {
        background: string;
        btn: string;
    };
    data: ProjectItem[];
};

function WorkSection(props: Props) {
    const { theme, data } = props;
    return (
        <section className={cn(theme.background)}>
            <div className="max-w-screen-xxl mx-auto px-24 pb-24 pt-8 max-lg:px-4 max-lg:py-4">
                <div className={
                    cn("text-[3.75rem] font-semibold leading-[4.5rem] tracking-[-0.01em] text-center max-w-[624px] mx-auto py-24",
                        "max-lg:text-[2.25rem] max-lg:leading-[2.688rem] max-lg:py-14"
                    )
                }>
                    Selected works from 2020 to the present
                </div>
                <div className="gap-20 flex flex-col max-lg:gap-14">
                    {data.map((item, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                item={item}
                                theme={{
                                    container: 'bg-white',
                                }}
                            />
                        );
                    })}
                </div>
                <div className="flex justify-center w-full">
                    <Link
                        href={'/work'}
                        className={cn(
                            'text-[1.125rem] my-10 px-7 py-3 rounded-[8px] leading-[1.463rem] font-semibold text-start flex items-center gap-2',
                            theme.btn
                        )}
                    >
                        Start a project
                        <Icon url={Assets.arrowTopRightIcon.src} size={24} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default WorkSection;
