'use client';

import Carousel from '@/components/base/carousel/Carousel';
import data from '@/data/data.json';
import { cn } from '@/lib/utils';

import { SlideCard, SlideCardTheme } from './SlideCard';

type Props = {
    cardTheme?: SlideCardTheme;
    activeDotClassName?: string;
    inactiveDotClassName?: string;
};

export const WhatTheySaidAboutMeSlider = (props: Props) => {
    const { whatThaySaidAboutMe } = data;
    const { cardTheme, activeDotClassName, inactiveDotClassName } = props;
    return (
        <div className="flex gap-8">
            <Carousel
                slides={whatThaySaidAboutMe}
                slideClassName={cn(
                    '!min-w-0 pl-2 flex-[0_0_33%] max-lg:flex-[0_0_100%] max-lg:pl-0'
                )}
                activeDotClassName={activeDotClassName}
                inactiveDotClassName={inactiveDotClassName}
            >
                {(item) => (
                    <div className="mx-2">
                        <SlideCard {...item.data} theme={cardTheme} />
                    </div>
                )}
            </Carousel>
        </div>
    );
};
