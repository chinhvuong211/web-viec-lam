'use client';

import Carousel from '@/components/base/carousel/Carousel';
import { WhatTheySaidAboutMeItem } from '@/features/common/interface';
import { cn } from '@/lib/utils';

import { SlideCard, SlideCardTheme } from './SlideCard';

type Props = {
    cardTheme?: SlideCardTheme;
    activeDotClassName?: string;
    inactiveDotClassName?: string;
    data: WhatTheySaidAboutMeItem[];
};

export const WhatTheySaidAboutMeSlider = (props: Props) => {
    const { cardTheme, activeDotClassName, inactiveDotClassName, data } = props;
    return (
        <div className="flex gap-8">
            <Carousel
                slides={data}
                slideClassName={cn(
                    '!min-w-0 flex-[0_0_20%] max-lg:flex-[0_0_100%] max-xl:flex-[0_0_50%] max-lg:pl-2 max-lg:pr-2 '
                )}
                activeDotClassName={activeDotClassName}
                inactiveDotClassName={inactiveDotClassName}
            >
                {(item) => (
                    <div className="mx-2 h-full">
                        <SlideCard {...item.data} theme={cardTheme} />
                    </div>
                )}
            </Carousel>
        </div>
    );
};
