import { MarketingData } from '@/features/common/interface';

type Props = {
    data: MarketingData;
};

export default function MarketingStyle3HomePage(props: Props) {
    const { data } = props;
    return <div>{data.aboutMe.name}</div>;
}
