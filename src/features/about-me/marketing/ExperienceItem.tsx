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
                <div
                    className={cn('w-1.5 h-1.5 rounded-full', markBgColor)}
                />
                <div
                    className={cn(
                        'text-[16px] leading-[21.6px] text-[#595959] font-medium',
                        'max-lg:text-[14px] max-lg:leading-[19px]'
                    )}
                >
                    {period}
                </div>
            </div>

            <div className={cn('flex gap-3 mt-1 items-center', 'max-lg:gap-1 max-lg:mt-2')}>
                <div
                    className={cn(
                        'text-[20px] leading-[22px] text-[#111111] font-medium',
                        'max-lg:text-[16px] max-lg:leading-[18px]'
                    )}
                >
                    {company}
                </div>
                <div
                    className={cn(
                        'text-[16px] font-medium leading-[21.6px]',
                        'max-lg:text-[14px] max-lg:leading-[19px]'
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
                            'text-[16px] leading-[21.6px] text-[#222222]',
                            'max-lg:text-[14px] max-lg:leading-[19px]'
                        )}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
