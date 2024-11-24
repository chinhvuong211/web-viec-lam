import Link from 'next/link';

import { Assets } from '@/assets';
import Button from '@/components/base/button/Button';
import Image from '@/components/base/Image';
import Modal from '@/components/base/modal/Modal';
import data from '@/data/developer.json';
import { cn } from '@/lib/utils';

import ConnectForm from './ConnectForm';

type Props = {
    theme: {
        primaryText: string;
        secondaryText: string;
        connectButton: string;
        connectButtonText: string;
        availabilityStatus: string;
    };
};

const { aboutMe } = data;

function HomeBanner({ theme }: Props) {
    return (
        <div className="h-screen -mb-[100px] max-lg:mb-10">
            {/* Hero Section */}
            <section className="max-w-screen-xxl left-0 right-0 mx-auto pt-[233px] max-lg:px-5 max-lg:pt-[9.375rem] pb-[4.5625rem]">
                <div
                    className={cn(
                        'text-[88px] font-semibold leading-[96.8px]',
                        'tracking-[-0.01em] flex flex-col justify-center items-center',
                        'max-lg:text-[40px] max-lg:leading-[48px] max-lg:justify-start max-lg:items-start',
                        theme.primaryText
                    )}
                >
                    <div className="flex items-center gap-6">
                        <div>
                            <div className="flex items-center justify-end max-lg:justify-start">
                                <Image
                                    src={Assets.marketingHomeBanner11}
                                    alt=""
                                    width={88}
                                    height={88}
                                    className="aspect-[88/88] inline mr-6 max-lg:w-11"
                                />
                                Hello,{' '}
                                <span className={cn(theme.secondaryText, 'whitespace-pre')}>
                                    {' '}
                                    I’m Jane
                                </span>
                            </div>
                            <div>
                                A <span className={cn(theme.secondaryText)}>Digital</span> Marketing
                            </div>
                        </div>
                        <Image
                            src={Assets.marketingHomeBanner13}
                            alt=""
                            width={316}
                            height={229}
                            className="max-lg:hidden"
                        />
                    </div>
                    <div className="flex items-center gap-6 max-lg:flex-wrap max-lg:gap-0 ">
                        with 5 years
                        <Image
                            src={Assets.marketingHomeBanner12}
                            alt=""
                            width={88}
                            height={88}
                            className="aspect-[88/88] inline max-lg:w-11 max-lg:ml-3"
                        />
                        experience
                    </div>
                </div>

                <Image
                    src={Assets.marketingHomeBanner13}
                    alt=""
                    width={316}
                    height={229}
                    className="hidden max-lg:block max-lg:w-full"
                />
                <Modal
                    contentComponent={ConnectForm}
                    title="Have an project in mind "
                    className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 max-lg:bottom-4"
                >
                    <div
                        className={cn(
                            'mx-auto mt-[7.3125rem] flex w-fit items-center space-x-6 max-lg:space-x-2 rounded-full border px-4 py-3 bg-white max-lg:w-full',
                            'border-light-primary',
                            'max-lg:px-2 max-lg:py-1',
                            theme.connectButton
                        )}
                    >
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 min-w-2 rounded-full bg-[#12C966] " />
                            <div
                                className={cn(
                                    'text-medium-16 light:text-light-primary whitespace-nowrap',
                                    'max-lg:!text-[0.875rem] max-lg:leading-4 dark:text-white green:text-white',
                                    theme.availabilityStatus
                                )}
                            >
                                {aboutMe.availabilityStatus}
                            </div>
                        </div>
                        <button
                            className={cn(
                                'max-h-[2.4375rem] rounded-[3.75rem] border px-5 py-3 flex-center text-medium-16 text-center whitespace-nowrap',
                                '',
                                'max-lg:text-[0.875rem] max-lg:leading-4 max-lg:px-2 max-lg:py-1',
                                theme.connectButtonText
                            )}
                        >
                            CONNECT NOW
                        </button>
                    </div>
                </Modal>
            </section>
        </div>
    );
}

export default HomeBanner;
