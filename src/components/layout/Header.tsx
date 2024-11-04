'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

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

const Header: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const router = usePathname();

    // Show or hide the button based on scroll position
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

    const pathIndex = useMemo(() => {
        return routerNameMobile.findLastIndex((item) => router.includes(item.path));
    }, [router]);

    return (
        <header
            className={cn(
                'fixed top-0 z-10 w-full py-5  left-0 right-0 ',
                isVisible ? 'bg-theme-background shadow-xxl' : ''
            )}
        >
            <div className="mx-auto w-full px-24 max-lg:px-5 max-w-screen-xxl">
                <div className="flex items-center justify-between gap-2">
                    <div
                        className={cn(
                            'text-body-1 flex items-center dark:text-white green:text-white text-everett',
                            'light:text-light-primary light:font-medium max-lg:font-medium max-lg:text-[1.25rem]'
                        )}
                    >
                        <Link href={'/'}>P.Chuong</Link>
                    </div>

                    <div className="flex items-center gap-9 max-lg:hidden text-[#E9E9E9]">
                        {routerNames.map((item) => (
                            <Link href={item.path} key={item.path}>
                                <div
                                    className={cn(
                                        'text-body-16',
                                        'light:text-light-primary light:font-medium'
                                    )}
                                >
                                    {item.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                    <button
                        className={cn(
                            'shadow-xs flex max-h-10 items-center rounded-[60px] border border-[#0057FF] bg-[#010005] px-6 py-2.5 text-[#F2F2F2]',
                            'max-lg:hidden ',
                            'green:border-[#FFFFFF] green:bg-transparent',
                            'light:bg-transparent light:text-light-primary light:border-light-primary light:font-medium'
                        )}
                    >
                        Contact
                    </button>
                    <Dropdown
                        items={routerNameMobile}
                        className="hidden max-lg:inline-block "
                        itemClass="w-full w-[calc(100vw-40px)] !py-8"
                        renderItems={(item, _, index) => {
                            return (
                                <Link href={item.path}>
                                    <div
                                        className={cn(
                                            'block px-4 py-2 text-body-16 text-gray-700 hover:bg-gray-100 hover:text-gray-900 ',
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
                                    className="text-white light:text-light-primary"
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

export default Header;
