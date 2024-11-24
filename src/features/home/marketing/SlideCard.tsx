import { Assets } from '@/assets';
import { Icon } from '@/components/base/icon/Icon';
import Image from '@/components/base/Image';
import { cn } from '@/lib/utils';

export type SlideCardTheme = {
    background?: string;
    description?: string;
    title?: string;
    position?: string;
};

type SlideCardProps = {
    name: string;
    position: string;
    description: string;
    avatar: string;
    star?: number;
    theme?: SlideCardTheme;
};

export const SlideCard = (props: SlideCardProps) => {
    const { name, position, description, avatar, theme, star } = props;
    return (
        <div
            className={cn(
                'flex flex-col rounded-[1rem] py-8 px-9 backdrop-blur-3xl h-full',
                theme?.background
            )}
        >
            {star && (
                <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: star }).map((_, index) => (
                        <Icon url={Assets.starIcon.src} key={index} className="text-[#FFBB24]" />
                    ))}
                </div>
            )}
            <div className={cn('text-body-16 ', theme?.description)}>{description}</div>
            <div className="mt-8 flex items-center gap-4">
                <Image
                    src={Assets[avatar as keyof typeof Assets]}
                    alt="avatar"
                    width={100}
                    height={100}
                    className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col gap-2">
                    <div className={cn('font-semibold text-[0.875rem]', theme?.title)}>{name}</div>
                    <div className={cn('text-[0.75rem] font-medium', theme?.position)}>
                        {position}
                    </div>
                </div>
            </div>
        </div>
    );
};
