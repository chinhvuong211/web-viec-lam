import { Assets } from '@/assets';
import Image from '@/components/base/Image';
import { cn } from '@/lib/utils';

interface ImageCardProps {
    url: string;
    className?: string;
    ghimClassName?: string;
    showGhim?: boolean;
}

export default function ImageCard({ url, className, ghimClassName, showGhim }: ImageCardProps) {
    return (
        <div className={className}>
            <div
                className={cn(
                    'w-full p-1 shadow-[0px_4.171px_31.283px_0px_rgba(172,172,172,0.25)]',
                    'border-4 border-white bg-white border-b-[40px] rounded-[0.5rem] re'
                )}
            >
                <div className="relative w-full h-full">
                    <Image
                        src={url}
                        width={272}
                        height={272}
                        className="object-cover w-full rounded-t-[0.375rem] aspect-square object-top"
                        alt={''}
                    />
                    {showGhim && (
                        <Image
                            src={Assets.ghimImage}
                            width={79}
                            height={158}
                            className={cn(
                                'absolute top-0 right-0 translate-y-[-4.375rem] aspect-[79/158] w-[4.9375rem]',
                                ghimClassName
                            )}
                            alt={''}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
