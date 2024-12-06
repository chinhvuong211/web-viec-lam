import { cn } from '@/lib/utils';

import ImageCard from './ImageCard';

type Props = {
    url: string;
    url2: string;
};

export default function ImageGalary({ url, url2 }: Props) {
    return (
        <div>
            <div className="relative h-[33.9375rem] w-full">
                <ImageCard
                    url={url}
                    className="rotate-[6.7deg] absolute right-0 max-w-[27.9375rem] w-full top-0"
                />
                <ImageCard
                    url={url2}
                    className="rotate-[-6.1deg] absolute left-0 max-w-[17rem] bottom-0"
                />
            </div>
            <button
                className={cn(
                    'text-[1.125rem] mx-auto mt-4 max-lg:mt-14 px-6 py-3 rounded-[0.5rem] leading-[1.4625rem] font-medium text-start flex items-center gap-2 max-lg:text-[1rem] max-lg:leading-[1.3rem]',
                    'bg-[#111111] text-white'
                )}
            >
                Contact now
            </button>
        </div>
    );
}
