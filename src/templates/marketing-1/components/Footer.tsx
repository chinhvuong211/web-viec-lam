import MarketingFooter from "@/components/layout/MarketingFooter";
import { MarketingFooterProps } from "@/components/layout/MarketingFooter";

export default function Marketing1Footer(props: MarketingFooterProps) {
    return <MarketingFooter theme={{
        social: 'text-[#D2DEFC]',
        message: '!text-white',
        email: 'text-white',
        copyright: 'text-[#BBBBBB]',
        router: 'text-[#BBBBBB]',
        routerContainer: 'light:pt-5 light:border-light-primary',
        btn: 'bg-white text-black',
        divider: 'border-white',
        contact: 'text-[#E8E8E8]',
    }} {...props} />
}
