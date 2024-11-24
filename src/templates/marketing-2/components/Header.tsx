import MarketingHeader from '@/components/layout/MarketingHeader';

type Props = {
    name?: string;
};

export default function Marketing1Header(props: Props) {
    const { name } = props || {};

    return (
        <MarketingHeader
            theme={{
                text: 'text-[#111111]',
                background: 'bg-white',
                contact: 'text-white bg-[#111111]',
                activeClass: 'shadow-xxl',
                inActiveClass: '',
            }}
            name={name}
        />
    );
}
