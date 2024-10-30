'use client';
import Link from 'next/link';

import Image, { IImageProps } from '@/components/base/Image';
import TagItem from '@/components/TagItem';
import { ProjectItem } from '@/features/work/interface';
import { cn } from '@/lib/utils';

interface Props {
    item: ProjectItem;
    className?: string;
    imageProps?: Partial<IImageProps>;
}

function ProjectCard(props: Props) {
    const { item, className, imageProps } = props;

    const { imageUrl, name, technologies, id } = item;

    return (
        <div className={className}>
            <Link href={`work/${id}`} className="block">
                <Image
                    src={imageUrl}
                    alt=""
                    className={cn('object-cover', imageProps?.className)}
                    {...imageProps}
                />
                <div
                    className={cn(
                        'mt-4 text-title-h4 max-lg:text-md-title-h4',
                        'light:text-[#272626]',
                        'dark:text-white',
                        'green:text-white'
                    )}
                >
                    {name}
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                    {technologies.map((item) => (
                        <TagItem key={item} label={item} />
                    ))}
                </div>
            </Link>
        </div>
    );
}

export default ProjectCard;
