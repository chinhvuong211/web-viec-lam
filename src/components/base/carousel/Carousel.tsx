'use client';
import { EmblaOptionsType } from 'embla-carousel';
import { EmblaPluginType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import React, { forwardRef, Ref, useCallback, useImperativeHandle, useState } from 'react';

import { cn } from '@/lib/utils';

export interface ICarouselProps<T> {
    slides: T[];
    dotContainerClassName?: string;
    dotClassName?: (isActive: boolean) => string;
    className?: string;
    children?: (data: { data: T; selectedIndex: number; index: number }) => React.ReactNode;
    onSwipe?: (index: number) => void;
    hideDot?: boolean;
    slideContainerClassName?: string;
    slideClassName?: string;
    style?: React.CSSProperties;
    pluginType?: EmblaPluginType[];
    option?: EmblaOptionsType;
    activeDotClassName?: string;
    inactiveDotClassName?: string;
}

export interface ICarouselHandle {
    scrollToIndex: (index: number) => void;
    reInit: (option: EmblaOptionsType) => void;
}

function Carousel<T>(
    {
        slides,
        dotContainerClassName,
        slideContainerClassName,
        slideClassName,
        dotClassName,
        children,
        className,
        onSwipe,
        style,
        pluginType,
        option = { loop: true, align: 'start' },
        activeDotClassName = 'bg-white',
        inactiveDotClassName = 'bg-[#464646]',
    }: ICarouselProps<T>,
    ref: Ref<ICarouselHandle>
) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            ...option,
            startIndex: 0,
        },
        pluginType
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;

        setSelectedIndex(emblaApi.selectedScrollSnap());
        onSwipe?.(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    React.useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    useImperativeHandle(
        ref,
        () => ({
            scrollToIndex: (index: number) => {
                if (emblaApi) {
                    scrollTo(index);
                }
            },
            reInit: (option) => {
                emblaApi?.reInit(option);
            },
        }),
        [emblaApi]
    );

    return (
        <div className={cn('group relative overflow-hidden', className)} style={style}>
            <div className="w-full overflow-hidden " ref={emblaRef}>
                <div className={cn('flex', slideContainerClassName)}>
                    {slides.map((slide, index) => (
                        <div
                            className={cn('relative min-w-full overflow-hidden', slideClassName)}
                            key={index}
                        >
                            {children?.({ data: slide, selectedIndex, index })}
                        </div>
                    ))}
                </div>
            </div>

            <div className={cn('flex justify-center mt-10 max-lg:mt-4', dotContainerClassName)}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={cn(
                            `mx-1 rounded-full transition-all duration-300 h-1.5 w-1.5 ${
                                index === selectedIndex ? activeDotClassName : inactiveDotClassName
                            }`,
                            dotClassName?.(index === selectedIndex)
                        )}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default forwardRef(Carousel) as <T>(
    props: ICarouselProps<T> & { ref?: Ref<ICarouselHandle> }
) => JSX.Element;
