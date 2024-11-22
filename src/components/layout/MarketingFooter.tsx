import React from 'react';

import { Assets } from '@/assets';
import data from '@/data/developer.json';
import { Theme } from '@/lib/constant';
import { getCookieTheme } from '@/lib/theme';
import { cn } from '@/lib/utils';

import { Icon } from '../base/icon/Icon';
import { TextTitle } from '../TextTitle';
const { contact } = data;

const routerNames = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About me',
        path: '/about-me',
    },
    {
        name: 'Work',
        path: '/work',
    },
];

const socials = [
    {
        name: 'Facebook',
        icon: Assets.facebookIcon.src,
        link: contact.facebookLink,
    },
    {
        name: 'Github',
        icon: Assets.githubIcon.src,
        link: contact.githubLink,
    },
    {
        name: 'LinkedIn',
        icon: Assets.linkedInIcon.src,
        link: contact.linkedInLink,
    },
];

const bgMapping = {
    [Theme.DEVELOPER_1]: Assets.footerImage.src,
    [Theme.DEVELOPER_3]: Assets.footerLightImage.src,
    [Theme.DEVELOPER_2]: Assets.footerGreenImage.src,
};

interface FooterProps {
    theme?: {
        social?: string;
        message?: string;
        email?: string;
        copyright?: string;
        router?: string;
        routerContainer?: string;
        background?: string;
        btn?: string;
        divider?: string;
        contact?: string;
    };
    data?: {
        banner?: string;
        socials?: {
            icon: string;
            link: string;
        }[];
    }
}

const socialItems = [
    {
        icon: Assets.facebookIcon.src,
        link: contact.facebookLink,
    },
  
    {
        icon: Assets.linkedInIcon.src,
        link: contact.linkedInLink,
    },
    {
        icon: Assets.linkedInIcon.src,
        link: contact.linkedInLink,
    },
    {
        icon: Assets.linkedInIcon.src,
        link: contact.linkedInLink,
    },
    
];
const MarketingFooter: React.FC<FooterProps> = (props) => {
    const {
        theme = {
            social: '',
            message: '',
            email: '',
            copyright: '',
            router: '',
            routerContainer: '',
            background: '',
            btn: '',
            divider: '',
            contact: '',
        },
        data,
    } = props;
    const bg = bgMapping[getCookieTheme()];

    return (
        <footer className="px-20 py-10">
            <div className="max-w-screen-xxl bg-black rounded-[32px] px-[72px] pt-[72px] pb-12">
                <div
                    className={cn(
                        'text-[56px] leading-[72px] font-[56px] text-start max-w-[836px]',
                        theme.message
                    )}
                >
                    Ready to elevate your business? Let's make it happen! ✨
                </div>
                <button
                    className={cn(
                        'text-[18px] my-10 px-7 py-4 rounded-[8px] leading-[23.4px] font-medium text-start flex items-center gap-2',
                        theme.btn
                    )}
                >
                    Start a project
                    <Icon
                        url={Assets.arrowTopRightIcon.src}
                        size={24}
                    />
                </button>

                <div className={cn('border-t ', theme.divider)} />

                <div className="flex justify-between">
                    <div className="mt-10 flex flex-col">
                        <div
                        className={cn(
                            'text-[18px] font-normal leading-[25.2px] text-white',
                            theme.contact
                        )}
                    >
                        Contact through:
                    </div>
                    <div
                        className={cn(
                            'text-[24px] font-medium leading-[32.2px] mt-6 underline',
                            theme.email
                        )}
                    >
                        Yourmail@gmail.com
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col">
                        <div
                        className={cn(
                            'text-[18px] font-normal leading-[25.2px] text-white',
                            theme.contact
                        )}
                        >
                            Follow:
                        </div>
                        <div
                        className={cn(
                            'text-[24px] font-medium leading-[32.2px] mt-2 underline text-white flex items-center gap-4',
                        )}
                    >
                        {
                            data?.socials?.map((item, index) => (
                                <a key={index} href={item.link} target="_blank">
                                   <div  className={cn('cursor-pointer bg-[#FBE9E9] rounded-full h-12 w-12 flex items-center justify-center text-[#F15060]')}>
                                    <Icon url={item.icon} size={20} />
                                </div>
                                </a>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MarketingFooter;
