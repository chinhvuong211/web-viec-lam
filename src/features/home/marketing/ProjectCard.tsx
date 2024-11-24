import Link from 'next/link';

import { Assets } from '@/assets';
import { Icon } from '@/components/base/icon/Icon';
import Image from '@/components/base/Image';
import { ProjectItem } from '@/features/work/interface';
import { cn } from '@/lib/utils';

export type ProjectCardTheme = {
    container?: string;
    primaryText?: string;
    secondaryText?: string;
    btn?: string;
};

type Props = {
    item: ProjectItem;
    theme?: ProjectCardTheme;
};

export default function ProjectCard(props: Props) {
    const { item, theme } = props;
    const { imageUrl = '', name = '', description = '', goals = [], id = '' } = item;

    const { primaryText = 'text-[#111111]', secondaryText = 'text-[#11111199]', btn = 'text-[#111111] bg-white border-[#DEDEDE]' } = theme || {};
    return (
        <Link
            href={`work/${id}`}
            className={cn(
                'w-full h-full rounded-[2rem] py-6 px-8 flex gap-8 max-lg:gap-5 max-lg:py-5 max-lg:px-4 max-lg:flex-col-reverse',
                'max-lg:rounded-[1.5rem]',
                theme?.container
            )}
        >
            <div className="flex-1 flex flex-col justify-between">
                <div className="">
                    <div className={
                        cn("text-[2rem] font-medium leading-[2.732rem] max-lg:text-[1.25rem] max-lg:leading-[1.706rem]",

                            primaryText
                        )
                    }>
                        {name}
                    </div>

                    <div className={cn('text-[1rem] font-normal leading-[1.35rem] mt-6 max-lg:mt-3', secondaryText)}>
                        {description}
                    </div>

                    <div className="mt-6">
                        <div className={cn('text-[1rem] font-normal leading-[1.35rem]', primaryText)}>
                            Goal
                        </div>
                        <ul className="flex flex-col gap-1 mt-2 ml-4">
                            {goals.map((goal, index) => (
                                <li
                                    key={index}
                                    className={cn('text-[1rem] font-normal leading-[1.35rem]', secondaryText)}
                                    style={{
                                        listStyleType: 'disc',
                                    }}
                                >
                                    {goal}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={
                    cn("text-[1.125rem] max-lg:text-[1rem] font-semibold leading-[1.462rem] max-lg:leading-[1.3rem] flex items-center gap-2 justify-between border rounded-[3.75rem] px-5 py-3 cursor-pointer max-lg:mt-5",
                        primaryText,
                        btn
                    )
                }>
                    <div>View detail case study</div>
                    <Icon url={Assets.chevronRightIcon.src} className="w-4 h-4" />
                </div>
            </div>
            <Image
                src={imageUrl}
                alt={name}
                width={693}
                height={464}
                className="rounded-[1.5rem] aspect-[693/464] max-lg:w-full max-lg:h-auto"
            />
        </Link>
    );
}
