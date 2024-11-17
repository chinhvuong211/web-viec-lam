import React from 'react';

import { Assets } from '@/assets';
import data from '@/data/data.json';
import { Theme } from '@/lib/constant';
import { getCookieTheme } from '@/lib/theme';

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
    [Theme.DARK]: Assets.footerImage.src,
    [Theme.LIGHT]: Assets.footerLightImage.src,
    [Theme.GREEN]: Assets.footerGreenImage.src,
};

const Footer: React.FC = () => {
    const bg = bgMapping[getCookieTheme()];

    return (
        <footer className="text-center">
            <div
                className="bg-theme-background "
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
                                    className="mb-5 text-[#D2DEFC] hover:underline light:text-light-primary"
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
                        <p className="mb-12 text-start text-white text-title-h3 max-lg:mb-8 max-lg:text-md-title-h3 light:text-light-primary">
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
                                className="min-w-5 text-[#0057FF] light:text-theme-primary"
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
                    <div className="mt-[18.75rem] flex items-center justify-between pb-10 max-lg:mt-[9rem] light:border-t light:pt-5 light:border-light-primary green:border-t green:pt-5 green:border-[#CEDFFF1A">
                        <div className="text-[#BBBBBB] text-normal-14 light:text-light-primary">
                            {contact.copyright}
                        </div>

                        <div className="flex items-center gap-5 max-lg:text-everett">
                            {routerNames.map((item) => (
                                <a
                                    className="text-[#BBBBBB] text-normal-14 light:text-light-primary"
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
