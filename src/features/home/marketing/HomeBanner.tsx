'use client';

import { Assets } from '@/assets';
import Image from '@/components/base/Image';
import Modal from '@/components/base/modal/Modal';
import data from '@/data/marketing.json';
import { useToggleBottomVisibility } from '@/hooks/useToggleVisibility';
import { cn } from '@/lib/utils';

import ConnectForm from './ConnectForm';

type Props = {
    theme: {
        primaryText: string;
        secondaryText: string;
        connectButton: string;
        connectButtonText: string;
        availabilityStatus: string;
        banner1?: string;
        banner2?: string;
        banner3?: string;
        highlightText?: string;
    };
};

const { aboutMe } = data;

function HomeBanner({ theme }: Props) {
    const {
        banner1 = Assets.marketingHomeBanner11,
        banner2 = Assets.marketingHomeBanner12,
        banner3 = Assets.marketingHomeBanner13,
    } = theme;

    const { isVisible } = useToggleBottomVisibility();
    return (
        <div className="h-screen -mb-[6.25rem] max-lg:mb-[0.625rem]">
            {/* Hero Section */}
            <section className="max-w-screen-xxl left-0 right-0 mx-auto pt-[14.5625rem] max-lg:px-5 max-lg:pt-[9.375rem] pb-[4.5625rem]">
                <div
                    className={cn(
                        'text-[5.5rem] font-semibold leading-[6.05rem]',
                        'tracking-[-0.01em] flex flex-col justify-center items-center',
                        'max-lg:text-[2.5rem] max-lg:leading-[3rem] max-lg:justify-start max-lg:items-start',
                        theme.primaryText
                    )}
                >
                    <div className="flex items-center gap-[1.5rem]">
                        <div>
                            <div className="flex items-center justify-end max-lg:justify-start">
                                <Image
                                    src={banner1}
                                    alt=""
                                    width={88}
                                    height={88}
                                    className="aspect-[88/88] w-[5.5rem] inline mr-[1.5rem] max-lg:w-[2.75rem] max-lg:mr-[0.75rem]"
                                />
                                Hello,{' '}
                                <span className={cn(theme.secondaryText, 'whitespace-pre')}>
                                    {' '}
                                    I’m <span className={theme.highlightText}>Jane</span>
                                </span>
                            </div>
                            <div>
                                A{' '}
                                <span className={cn(theme.secondaryText, theme.highlightText)}>
                                    Digital
                                </span>{' '}
                                Marketing
                            </div>
                        </div>
                        <Image
                            src={banner3}
                            alt=""
                            width={316}
                            height={229}
                            className="max-lg:hidden aspect-[316/229] w-[19.75rem]"
                        />
                    </div>
                    <div className="flex items-center gap-[1.5rem] max-lg:flex-wrap max-lg:gap-0">
                        with 5 years
                        <Image
                            src={banner2}
                            alt=""
                            width={88}
                            height={88}
                            className="aspect-[88/88] w-[5.5rem] inline max-lg:w-[2.75rem] max-lg:ml-[0.75rem]"
                        />
                        experience
                    </div>
                </div>

                <Image
                    src={banner3}
                    alt=""
                    width={316}
                    height={229}
                    className="hidden max-lg:block max-lg:w-full my-[0.125rem] aspect-[316/229] w-[19.75rem]"
                />
                <Modal
                    contentComponent={ConnectForm}
                    title="Have an project in mind "
                    className={cn(
                        'fixed bottom-[1.25rem] left-1/2 -translate-x-1/2 z-50 max-lg:bottom-[1rem]',
                        isVisible ? 'block' : 'max-lg:hidden'
                    )}
                >
                    <div
                        className={cn(
                            'mx-auto mt-[7.3125rem] w-fit max-lg:space-x-2 rounded-full bg-white max-lg:w-full',
                            'shadow-[0px_0px_20px_0px_#0000001A]',
                            'max-lg:px-1 max-lg:py-1 p-1',
                            theme.connectButton
                        )}
                    >
                        <div
                            className={cn(
                                'items-center flex space-x-[1.5rem] py-[0.0625rem] px-[0.1875rem] rounded-full shadow-[0px_0px_4px_0px_#0000001A]',
                                'max-lg:space-x-[0.5rem] max-lg:px-2 max-lg:py-1'
                            )}
                        >
                            <div className="flex items-center gap-[0.5rem]">
                                <div className="h-[0.5rem] w-[0.5rem] min-w-[0.5rem] rounded-full bg-[#12C966] " />
                                <div
                                    className={cn(
                                        'text-medium-16 light:text-light-primary whitespace-nowrap',
                                        'max-lg:!text-[0.875rem] max-lg:leading-4',
                                        theme.availabilityStatus
                                    )}
                                >
                                    {aboutMe.availabilityStatus}
                                </div>
                            </div>
                            <button
                                className={cn(
                                    'max-h-[2.4375rem] rounded-[3.75rem] border px-5 py-3 flex-center text-medium-16 text-center whitespace-nowrap',
                                    'max-lg:text-[0.875rem] max-lg:leading-4 max-lg:px-3 max-lg:py-3',
                                    theme.connectButtonText
                                )}
                            >
                                CONNECT NOW
                            </button>
                        </div>
                    </div>
                </Modal>
            </section>
        </div>
    );
}

export default HomeBanner;
