import { Assets } from '@/assets';
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
    theme?: SlideCardTheme;
};

export const SlideCard = (props: SlideCardProps) => {
    const { name, position, description, avatar, theme } = props;
    return (
        <div
            className={cn(
                'flex flex-col rounded-[1rem] py-8 px-9 backdrop-blur-3xl',
                theme?.background
            )}
        >
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
