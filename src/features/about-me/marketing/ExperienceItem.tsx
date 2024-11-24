import { cn } from '@/lib/utils';

import type { ExperienceItem } from '../interface';

type Props = {
    data: ExperienceItem;
    theme?: {
        markBgColor?: string;
    };
};

export default function ExperienceItem(props: Props) {
    const { data, theme } = props;
    const { title, company, period, description } = data;
    const { markBgColor = 'bg-[#FFBB24]' } = theme || {};
    return (
        <div>
            <div className="flex items-center gap-2">
                <div className={cn('w-1.5 h-1.5 rounded-full', markBgColor)} />
                <div
                    className={cn(
                        'text-[1rem] leading-[1.35rem] text-[#595959] font-medium',
                        'max-lg:text-[0.875rem] max-lg:leading-[1.1875rem]'
                    )}
                >
                    {period}
                </div>
            </div>

            <div className={cn('flex gap-3 mt-1 items-center', 'max-lg:gap-1 max-lg:mt-2')}>
                <div
                    className={cn(
                        'text-[1.25rem] leading-[1.375rem] text-[#111111] font-medium',
                        'max-lg:text-[1rem] max-lg:leading-[1.125rem]'
                    )}
                >
                    {company}
                </div>
                <div
                    className={cn(
                        'text-[1rem] font-medium leading-[1.35rem]',
                        'max-lg:text-[0.875rem] max-lg:leading-[1.1875rem]'
                    )}
                >
                    {title}
                </div>
            </div>

            <div className={cn('flex flex-col gap-2 mt-5', 'max-lg:mt-4')}>
                {description.map((item, index) => (
                    <div
                        key={index}
                        className={cn(
                            'text-[1rem] leading-[1.35rem] text-[#222222]',
                            'max-lg:text-[0.875rem] max-lg:leading-[1.1875rem]'
                        )}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
