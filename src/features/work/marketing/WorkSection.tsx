import Link from 'next/link';

import { Assets } from '@/assets';
import { Icon } from '@/components/base/icon/Icon';
import ProjectCard from '@/features/home/marketing/ProjectCard';
import { ProjectItem } from '@/features/work/interface';
import { cn } from '@/lib/utils';

import WorkFilter from './WorkFilter';
type Props = {
    projects: ProjectItem[];
    theme: {
        btn: string;
    };
};
export default function WorkSection({ projects, theme }: Props) {
    return (
        <div
            className={cn('max-w-screen-xxl mx-auto px-24 pb-24 pt-8 max-lg:px-5', 'max-lg:pb-10')}
        >
            <div
                className={cn(
                    'bg-white mt-[200px] text-[88px] font-semibold leading-[96.8px] tracking-[-0.01em] text-center mb-[120px]',
                    'max-lg:mt-[75px] max-lg:text-[40px] max-lg:leading-[44px] max-lg:mb-12'
                )}
            >
                Featured works
            </div>
            <WorkFilter />
            <div className="gap-10 flex flex-col">
                {projects?.map((item) => (
                    <ProjectCard key={item.id} item={item} theme={{ container: 'shadow-inset' }} />
                ))}
            </div>
            <div className="flex justify-center w-full">
                <Link
                    href={'/work'}
                    className={cn(
                        'text-[18px] my-10 px-7 py-3 rounded-[8px] leading-[23.4px] font-semibold text-start flex items-center gap-2 ',
                        'max-lg:mt-8 mb-0',
                        theme.btn
                    )}
                >
                    View more
                    <Icon url={Assets.arrowTopRightIcon.src} size={24} />
                </Link>
            </div>
        </div>
    );
}
