'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useEffect, useState } from 'react';

import { Assets } from '@/assets';
import { cn } from '@/lib/utils';

import { Icon } from '../base/icon/Icon';
import Dropdown from '../dropdown/Dropdown';

const routerNames = [
    {
        name: 'Overview',
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

const routerNameMobile = [
    ...routerNames,
    {
        name: 'Contact',
        path: '/contact',
    },
];

export type HeaderTheme = {
    text: string;
    font?: string;
    contact?: string;
    router?: string;
    background?: string;
    activeClass?: string;
    inActiveClass?: string;
};

type HeaderProps = {
    theme?: HeaderTheme;
    name?: string;
};

const MarketingHeader: React.FC<HeaderProps> = (props) => {
    const router = usePathname();
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.scrollY > 150) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll the window to the top

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        console.log(router);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const {
        theme = { text: '', activeClass: '', inActiveClass: '' },
        name = '',
    } = props || {};

    const pathIndex = useMemo(() => {
        return routerNameMobile.findLastIndex((item) => router.includes(item.path));
    }, [router]);

    return (
        <header
            className={cn(
                'fixed top-0 z-10 w-full py-4 left-0 right-0 px-10 max-lg:px-0 max-lg:py-0'
            )}
        >
            <div
                className={cn(
                    'mx-auto w-full px-8 py-4 max-w-screen-xxl rounded-[1rem] max-lg:px-4 max-lg:bg-white max-lg:rounded-none',
                    theme.background,
                    isVisible ? theme.activeClass : theme.inActiveClass
                )}
            >
                <div className="flex items-center justify-between gap-2">
                    <div
                        className={cn(
                            'font-medium text-[1.5625rem] leading-[1.75rem] text-white flex items-center font-montserrat max-lg:text-black',
                            theme.text
                        )}
                    >
                        <Link href={'/'}>{name}</Link>
                    </div>

                    <div className="flex items-center gap-9 max-lg:hidden">
                        {routerNames.map((item) => (
                            <Link href={item.path} key={item.path}>
                                <div
                                    className={cn(
                                        'font-semibold text-[1rem] leading-[1.5rem]',
                                        theme.text
                                    )}
                                >
                                    {item.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                    <button
                        className={cn(
                            'shadow-xs flex max-h-10 items-center rounded-[0.5rem] px-9 py-4 leading-[1.5rem] font-semibold',
                            'max-lg:hidden',
                            theme.contact
                        )}
                    >
                        Contact now
                    </button>
                    <Dropdown
                        items={routerNameMobile}
                        className="hidden max-lg:inline-block "
                        itemClass="w-full w-[calc(100vw-2.5rem)] !py-8"
                        renderItems={(item, _, index) => {
                            return (
                                <Link href={item.path}>
                                    <div
                                        className={cn(
                                            'block px-4 py-2 text-body-16 text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                                            'transform transition-all duration-200 ease-out justify-center flex items-center gap-2'
                                        )}
                                    >
                                        {pathIndex === index && (
                                            <div className="w-1.5 h-1.5 bg-theme-primary rounded-full" />
                                        )}

                                        <div
                                            className={cn(
                                                'text-center',
                                                pathIndex === index
                                                    ? 'text-theme-primary'
                                                    : 'text-[#576A8A]'
                                            )}
                                        >
                                            {item.name}
                                        </div>
                                        {item.path === '/contact' && (
                                            <Icon url={Assets.arrowRight2Icon.src} size={16} />
                                        )}
                                    </div>
                                </Link>
                            );
                        }}
                    >
                        {() => (
                            <button>
                                <Icon
                                    url={Assets.menuIcon.src}
                                    className={cn(theme.text, 'max-lg:text-black')}
                                    size={24}
                                />
                            </button>
                        )}
                    </Dropdown>
                </div>
            </div>
        </header>
    );
};

export default MarketingHeader;
