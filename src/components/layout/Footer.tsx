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
    };
}
const Footer: React.FC<FooterProps> = (props) => {
    const {
        theme = {
            social: '',
            message: '',
            email: '',
            copyright: '',
            router: '',
            routerContainer: '',
            background: '',
        },
    } = props;
    const bg = bgMapping[getCookieTheme()];

    return (
        <footer className="text-center">
            <div
                className={cn('bg-theme-background', theme.background)}
                style={{
                    backgroundImage: `url("${bg}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="max-w-screen-xxl px-24 pt-24 max-lg:px-5 max-lg:pt-10 mx-auto flex justify-between gap-24 max-lg:flex-col max-lg:justify-start max-lg:gap-0">
                    <div>
                        <TextTitle title="CONTACT" />
                        <div className="flex-start mt-20 flex flex-col items-start justify-start max-lg:hidden">
                            {socials.map((item, index) => (
                                <a
                                    href={item.link}
                                    key={index}
                                    className={cn('mb-5 hover:underline', theme.social)}
                                >
                                    <div className="flex items-center gap-2">
                                        <Icon url={item.icon} className="h-5 w-5" size={20} />
                                        <span className="text-normal-16">
                                            {item.name.toUpperCase()}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="max-w-[51.4375rem] text-start max-lg:mt-4">
                        <p
                            className={cn(
                                theme.message,
                                'mb-12 text-start text-title-h3 max-lg:mb-8 max-lg:text-md-title-h3'
                            )}
                        >
                            {contact.message}
                        </p>
                        <a
                            href={`mailto:${contact.email}`}
                            className=" flex items-center gap-2 text-start text-white underline underline-offset-[0.375rem] text-title-h3 max-lg:text-title-h4 light:text-light-primary"
                            style={{ wordBreak: 'break-word' }}
                        >
                            <Icon
                                url={Assets.arrowUpRightIcon.src}
                                size={20}
                                className={cn('min-w-5 text-[#0057FF]', theme.email)}
                            />
                            {contact.email}
                        </a>
                    </div>

                    <div className="flex-start mt-20  hidden flex-col items-start justify-start max-lg:flex">
                        {socials.map((item, index) => (
                            <a
                                href={item.link}
                                key={index}
                                className="mb-5 dark:text-[#D2DEFC] green:text-[#D2DEFC] hover:underline"
                                target="_blank"
                            >
                                <div className="flex items-center gap-2">
                                    <Icon url={item.icon} className="h-5 w-5 " size={20} />
                                    <span className="text-normal-16">
                                        {item.name.toUpperCase()}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="max-w-screen-xxl left-0 right-0 mx-auto px-24 pt-24 max-lg:px-5 max-lg:pt-10 ">
                    <div
                        className={cn(
                            theme.routerContainer,
                            'mt-[18.75rem] flex items-center justify-between pb-10 max-lg:mt-[9rem] light:border-t light:border-light-primary'
                        )}
                    >
                        <div className={cn('text-normal-14 ', theme.copyright)}>
                            {contact.copyright}
                        </div>

                        <div className="flex items-center gap-5 ">
                            {routerNames.map((item) => (
                                <a
                                    className={cn('text-[#BBBBBB] text-normal-14', theme.router)}
                                    href={item.path}
                                    key={item.path}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
