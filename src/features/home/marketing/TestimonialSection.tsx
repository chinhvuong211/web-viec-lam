import { WhatTheySaidAboutMeItem } from '@/features/common/interface';
import { cn } from '@/lib/utils';

import { SlideCardTheme } from './SlideCard';
import { WhatTheySaidAboutMeSlider } from './WhatTheySaidAboutMeSlider';

type Props = {
    cardTheme?: SlideCardTheme;
    activeDotClassName?: string;
    inactiveDotClassName?: string;
    data: WhatTheySaidAboutMeItem[];
};

function TestimonialSection(props: Props) {
    const { cardTheme, activeDotClassName, inactiveDotClassName, data } = props;
    return (
        <section className="bg-white">
            <div className="max-w-screen-xxl left-0 right-0 mx-auto px-24 pt-24 pb-10 max-lg:px-5 max-lg:py-10 max-lg:pb-2">
                <div
                    className={cn(
                        'text-style-1 text-title-h2 max-lg:pr-0 text-center',
                        'max-lg:text-[36px] max-lg:leading-[43px]'
                    )}
                >
                    <div>What they said</div>
                    <div>About me</div>
                </div>
            </div>

            <div className="mx-auto px-8 pb-24 max-lg:px-5 max-lg:py-4 max-lg:pb-2">
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
