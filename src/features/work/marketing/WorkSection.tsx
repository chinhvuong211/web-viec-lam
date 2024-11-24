import Link from 'next/link';

import { Assets } from '@/assets';
import { Icon } from '@/components/base/icon/Icon';
import ProjectCard, { ProjectCardTheme } from '@/features/home/marketing/ProjectCard';
import { ProjectItem } from '@/features/work/interface';
import { cn } from '@/lib/utils';

import WorkFilter from './WorkFilter';
type Props = {
    projects: ProjectItem[];
    theme: {
        btn: string;
        projectCard?: ProjectCardTheme;
        container?: string;
    };
};
export default function WorkSection({ projects, theme }: Props) {
    const { container = 'bg-white' } = theme;
    return (
        <div className={container}>
            <div
                className={cn('max-w-screen-xxl mx-auto px-24 pb-24 pt-8 max-lg:px-5', 'max-lg:pb-10')}
            >
                <div
                    className={cn(
                        ' mt-[12.5rem] text-[5.5rem] font-semibold leading-[6.05rem] tracking-[-0.01em] text-center mb-[7.5rem]',
                        'max-lg:mt-[4.6875rem] max-lg:text-[2.5rem] max-lg:leading-[2.75rem] max-lg:mb-12',
                    )}
                >
                    Featured works
                </div>
                <WorkFilter />
                <div className="gap-10 flex flex-col">
                    {projects?.map((item) => (
                        <ProjectCard key={item.id} item={item} theme={theme.projectCard} />
                    ))}
                </div>
                <div className="flex justify-center w-full">
                    <Link
                        href={'/work'}
                        className={cn(
                            'text-[1.125rem] my-10 px-7 py-3 rounded-[0.5rem] leading-[1.4625rem] font-semibold text-start flex items-center gap-2 ',
                            'max-lg:mt-8 mb-0',
                            theme.btn
                        )}
                    >
                        View more
                        <Icon url={Assets.arrowTopRightIcon.src} size={24} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
