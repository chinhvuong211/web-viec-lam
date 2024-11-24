import React from 'react';

import { Assets } from '@/assets';
import { cn } from '@/lib/utils';

import { Icon } from '../base/icon/Icon';

export interface MarketingFooterProps {
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
    };
}

const MarketingFooter: React.FC<MarketingFooterProps> = (props) => {
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

    return (
        <footer className="px-20 py-10 w-full max-lg:px-2 max-lg:py-4">
            <div className="max-w-screen-xxl w-full bg-black rounded-[2rem] max-lg:rounded-[1.5rem] px-[4.5rem] pt-[4.5rem] pb-12 mx-auto max-lg:px-5 max-lg:py-6">
                <div
                    className={cn(
                        'text-[3.5rem] leading-[4.5rem] font-semibold text-start max-w-[52.25rem] max-lg:text-[1.5rem] max-lg:leading-[1.95rem] ',
                        theme.message
                    )}
                >
                    Ready to elevate your business? Let's make it happen! ✨
                </div>
                <button
                    className={cn(
                        'text-[1.125rem] my-10 max-lg:my-6 px-7 py-4 rounded-[0.5rem] leading-[1.4625rem] font-medium text-start flex items-center gap-2 max-lg:text-[1rem] max-lg:leading-[1.3rem]',
                        theme.btn
                    )}
                >
                    Start a project
                    <Icon url={Assets.arrowTopRightIcon.src} size={24} />
                </button>

                <div className={cn('border-t ', theme.divider)} />

                <div className="flex justify-between max-lg:flex-col">
                    <div className="mt-10 flex flex-col max-lg:mt-6">
                        <div
                            className={cn(
                                'text-[1.125rem] font-normal leading-[1.575rem] text-white max-lg:text-[1rem] max-lg:leading-[1.4rem]',
                                theme.contact
                            )}
                        >
                            Contact through:
                        </div>
                        <div
                            className={cn(
                                'text-[1.5rem] font-medium leading-[2.0125rem] mt-6 max-lg:mt-2 underline max-lg:text-[1.25rem] max-lg:leading-[1.625rem]',
                                theme.email
                            )}
                        >
                            Yourmail@gmail.com
                        </div>
                    </div>
                    <div className="mt-10 max-lg:mt-6 flex flex-col">
                        <div
                            className={cn(
                                'text-[1.125rem] font-normal leading-[1.575rem] text-white max-lg:text-[1rem] max-lg:leading-[1.4rem]',
                                theme.contact
                            )}
                        >
                            Follow:
                        </div>
                        <div
                            className={cn(
                                'text-[1.5rem] font-medium leading-[2.0125rem] mt-2 underline text-white flex items-center gap-4'
                            )}
                        >
                            {data?.socials?.map((item, index) => (
                                <a key={index} href={item.link} target="_blank">
                                    <div
                                        className={cn(
                                            'cursor-pointer bg-[#FBE9E9] rounded-full h-12 w-12 flex items-center justify-center text-[#F15060]'
                                        )}
                                    >
                                        <Icon url={item.icon} size={20} />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MarketingFooter;
