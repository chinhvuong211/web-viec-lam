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
                background: '!bg-[#F6F6F6]',
                description: 'text-[#595959]',
                title: 'text-[#272626]',
                position: 'text-[#595959]',
                star: 'text-[#B8E71D]'
            }}
            activeDotClassName={'bg-[#272626]'}
            inactiveDotClassName={'bg-[#C3C3C3]'}
        />
    );
}
