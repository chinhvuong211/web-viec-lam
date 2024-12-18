import { WhatTheySaidAboutMeItem } from '@/features/common/interface';
import { cn } from '@/lib/utils';

import { SlideCardTheme } from './SlideCard';
import { WhatTheySaidAboutMeSlider } from './WhatTheySaidAboutMeSlider';

type Props = {
    cardTheme?: SlideCardTheme;
    activeDotClassName?: string;
    inactiveDotClassName?: string;
    backgroundClassName?: string;
    data: WhatTheySaidAboutMeItem[];
};

function TestimonialSection(props: Props) {
    const {
        cardTheme,
        activeDotClassName,
        inactiveDotClassName,
        backgroundClassName = 'bg-white',
        data,
    } = props;
    return (
        <section className={cn(backgroundClassName)}>
            <div className="max-w-screen-xxl left-0 right-0 mx-auto px-24 pt-24 pb-10 max-lg:px-5 max-lg:py-10 max-lg:pb-2">
                <div
                    className={cn(
                        'text-style-1 text-title-h2 max-lg:pr-0 text-center',
                        'max-lg:text-[2.25rem] max-lg:leading-[2.688rem]'
                    )}
                >
                    <div>What Clients said</div>
                    <div>About me</div>
                </div>
            </div>

            <div className="mx-auto pb-24 max-lg:py-4 max-lg:pb-2">
                <WhatTheySaidAboutMeSlider
                    data={data}
                    cardTheme={cardTheme}
                    activeDotClassName={activeDotClassName}
                    inactiveDotClassName={inactiveDotClassName}
                />
            </div>
        </section>
    );
}

export default TestimonialSection;
