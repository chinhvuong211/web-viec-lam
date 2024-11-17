import { TextTitle } from '@/components/TextTitle';

import { SlideCardTheme } from './SlideCard';
import { WhatTheySaidAboutMeSlider } from './WhatTheySaidAboutMeSlider';

type Props = {
    cardTheme?: SlideCardTheme;
    activeDotClassName?: string;
    inactiveDotClassName?: string;
};

function TestimonialSection(props: Props) {
    const { cardTheme, activeDotClassName, inactiveDotClassName } = props;
    return (
        <section className="bg-theme-background">
            <div className="max-w-screen-xxl left-0 right-0 mx-auto px-24 pt-24 pb-10 max-lg:px-5 max-lg:py-10 max-lg:pb-2">
                <div className="flex justify-between items-center max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:gap-4 gap-4">
                    <TextTitle title={'Testimonial'} />
                    <div className="text-style-1 text-title-h2 pr-52 max-lg:pr-0">
                        <div>What they said</div>
                        <div>About me</div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xxl mx-auto px-8 pb-24 max-lg:px-5 max-lg:py-4 max-lg:pb-2">
                <WhatTheySaidAboutMeSlider
                    cardTheme={cardTheme}
                    activeDotClassName={activeDotClassName}
                    inactiveDotClassName={inactiveDotClassName}
                />
            </div>
        </section>
    );
}

export default TestimonialSection;
