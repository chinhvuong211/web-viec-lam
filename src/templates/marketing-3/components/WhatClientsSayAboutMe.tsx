import { MarketingData } from '@/features/common/interface';
import TestimonialSection from '@/features/home/marketing/TestimonialSection';

type Props = {
    data: MarketingData;
};

export default function WhatClientsSayAboutMe(props: Props) {
    const { data } = props;
    return (
        <TestimonialSection
            data={data.whatTheySaidAboutMe}
            cardTheme={{
                background: '!bg-white',
                description: 'text-[#595959]',
                title: 'text-[#272626]',
                position: 'text-[#595959]',
                star: 'text-[#FF3C00]'
            }}
            activeDotClassName={'bg-[#272626]'}
            inactiveDotClassName={'bg-[#C3C3C3]'}
            backgroundClassName={'bg-[#F4F4F4]'}
        />
    );
}
