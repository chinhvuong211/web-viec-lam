import { cn } from '@/lib/utils';

import type { EducationItem } from '../interface';

type Props = {
    data: EducationItem;
    theme?: {
        markBgColor?: string;
    };
};

export default function EducationItem(props: Props) {
    const { data, theme } = props;
    const { time, name, major } = data;
    const { markBgColor = 'bg-[#FFBB24]' } = theme || {};

    return (
        <div>
            <div className={cn('flex items-center gap-2', 'max-lg:gap-1')}>
                <div className={cn('w-1.5 h-1.5 rounded-full', markBgColor)}></div>
                <div
                    className={cn(
                        'text-[1rem] leading-[1.35rem] text-[#595959] font-medium',
                        'max-lg:text-[0.875rem] max-lg:leading-[1.1875rem]'
                    )}
                >
                    {' '}
                    {time}{' '}
                </div>
            </div>

            <div
                className={cn(
                    'text-[1.25rem] leading-[1.375rem] text-[#111111] font-medium mt-4',
                    'max-lg:text-[1rem] max-lg:leading-[1.125rem]'
                )}
            >
                {name}
            </div>

            <div
                className={cn(
                    'text-[0.875rem] leading-[1.1375rem] text-[#545151] mt-2',
                    'max-lg:text-[0.875rem] max-lg:leading-[1.125rem]'
                )}
            >
                {major}
            </div>
        </div>
    );
}
