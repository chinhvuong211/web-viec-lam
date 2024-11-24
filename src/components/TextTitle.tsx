import { Assets } from '@/assets';
import { Theme } from '@/lib/constant';
import { getCookieTheme } from '@/lib/theme';
import { cn } from '@/lib/utils';

import { Icon } from './base/icon/Icon';

const IconMapping = {
    [Theme.DEVELOPER_1]: {
        icon: <Icon url={Assets.asteriskIcon.src} className="text-[#E63B1D]" size={20} />,
        text: 'text-[#D2DEFC]',
    },
    [Theme.DEVELOPER_3]: {
        icon: <Icon url={Assets.asteriskLightIcon.src} className="text-[#F65D2C]" size={20} />,
        text: 'text-light-primary',
    },
    [Theme.DEVELOPER_2]: {
        icon: <div className="w-3.5 h-1.5 min-w-3.5 rounded-[1.1875rem] bg-[#12C99D]" />,
        text: 'text-[#D2DEFC]',
    },
};

export const TextTitle = (props: { title: string; className?: string }) => {
    const { className } = props;
    const { icon, text } = IconMapping[getCookieTheme()];
    return (
        <div className={cn('flex items-center gap-2 ', className)}>
            {icon}
            <span className={cn('text-normal-14 uppercase', text)}>{props.title}</span>
        </div>
    );
};
