import Link from 'next/link';

import { Assets } from '@/assets';
import Button from '@/components/base/button/Button';
import Modal from '@/components/base/modal/Modal';
import data from '@/data/developer.json';
import { Theme } from '@/lib/constant';
import { getCookieTheme } from '@/lib/theme';
import { cn } from '@/lib/utils';

import ConnectForm from './ConnectForm';

const { aboutMe } = data;

const bgMapping = {
    [Theme.DEVELOPER_1]: Assets.homeBanner.src,
    [Theme.DEVELOPER_3]: Assets.homeBannerLight.src,
    [Theme.DEVELOPER_2]: Assets.homeBannerGreen.src,
};

function HomeBanner() {
    const bg = bgMapping[getCookieTheme()];

    return (
        <div
            className="bg-theme-background bg-cover bg-no-repeat object-cover h-screen light:max-lg:h-fit max-lg:bg-center"
            style={{ backgroundImage: `url("${bg}")` }}
        >
            {/* Hero Section */}
            <section className="max-w-screen-xxl left-0 right-0 mx-auto px-24 pt-[13.75rem] text-center max-lg:px-5 max-lg:pt-[9.375rem] pb-[4.5625rem]">
                <p className="text-start text-2xl text-[#D2DEFC] max-lg:font-[1.125rem] max-lg:leading-[1.4625rem] light:text-light-primary">
                    <span className="uppercase max-lg:text-[1.125rem]">{aboutMe.hello} </span>
                    <span className="max-lg:block max-lg:mt-1 uppercase max-lg:text-[1.125rem]">
                        {aboutMe.introduce}{' '}
                        <span className="green:text-[#12C99D] uppercase">{aboutMe.name}</span>
                    </span>
                </p>
                <h1 className="text-style-1 mt-4 text-start text-title-h1 max-lg:text-md-title-h1">
                    {aboutMe.job}
                </h1>
                <h1 className="text-style-1 mt-4 text-start text-title-h1 max-lg:text-md-title-h1 max-lg:mt-1">
                    {aboutMe.position}
                </h1>

                <Link href={'/work'}>
                    <Button label={'SEE MY WORK'} className="mt-10" />
                </Link>

                <Modal
                    contentComponent={ConnectForm}
                    title="Have an project in mind "
                    className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 max-lg:bottom-4"
                >
                    <div
                        className={cn(
                            'mx-auto mt-[7.3125rem] flex w-fit items-center space-x-6 max-lg:space-x-2 rounded-full border px-4 py-3 bg-black light:bg-white max-lg:w-full',
                            'light:border-light-primary',
                            'dark:border-[#0057FF]',
                            'max-lg:px-2 max-lg:py-1'
                        )}
                    >
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 min-w-2 rounded-full bg-[#12C966] " />
                            <div
                                className={cn(
                                    'text-medium-16 light:text-light-primary whitespace-nowrap',
                                    'max-lg:!text-[0.875rem] max-lg:leading-4 dark:text-white green:text-white'
                                )}
                            >
                                {aboutMe.availabilityStatus}
                            </div>
                        </div>
                        <button
                            className={cn(
                                'max-h-[2.4375rem] rounded-[3.75rem] border px-5 py-3 flex-center text-medium-16 text-center whitespace-nowrap',
                                'green:text-[#0F0F0F] green:bg-white',
                                'dark:bg-white dark:text-[#0057FF] dark:border-[#0057FF]',
                                'light:text-white bg-light-primary',
                                'max-lg:text-[0.875rem] max-lg:leading-4 max-lg:px-2 max-lg:py-1'
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
