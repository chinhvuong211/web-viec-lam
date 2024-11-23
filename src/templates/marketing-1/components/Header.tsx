import MarketingHeader from "@/components/layout/MarketingHeader";
import { HeaderTheme } from "@/components/layout/MarketingHeader";

type Props = {
    name?: string;
};

export default function Marketing1Header(props: Props) {
    const { name } = props || {};

    return <MarketingHeader
        theme={{
            text: 'text-white',
            background: 'bg-black',
            contact: 'bg-white text-black',
        }}
        name={name}
    />
}
