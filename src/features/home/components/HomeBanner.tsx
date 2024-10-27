import Link from 'next/link';

import { Assets } from '@/assets';
import Button from '@/components/base/button/Button';
import data from '@/data/data.json';
import { Theme } from '@/lib/constant';
import { getCookieTheme } from '@/lib/theme';
import { cn } from '@/lib/utils';

const { aboutMe } = data;

const bgMapping = {
    [Theme.DARK]: Assets.homeBanner.src,
    [Theme.LIGHT]: Assets.homeBannerLight.src,
    [Theme.GREEN]: Assets.homeBannerGreen.src,
};

function HomeBanner() {
    const bg = bgMapping[getCookieTheme()];

    return (
        <div
            className="bg-theme-background bg-cover bg-no-repeat object-cover light:max-lg:h-fit max-lg:bg-center"
            style={{ backgroundImage: `url("${bg}")` }}
        >
            {/* Hero Section */}
            <section className="px-24 pt-[220px] text-center max-lg:px-5 max-lg:pt-[150px] pb-[73px]">
                <p className="text-start text-2xl text-[#D2DEFC] max-lg:font-[18px] max-lg:leading-[23.4px] light:text-light-primary">
                    <span className="uppercase">{aboutMe.hello} </span>
                    <span className="max-lg:block max-lg:mt-1 uppercase">
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

                <div
                    className={cn(
                        'mx-auto mt-[117px] flex w-fit items-center space-x-6 rounded-full border px-4 py-3 max-lg:hidden',
                        'light:border-light-primary',
                        'dark:border-[#0057FF]'
                    )}
                >
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#12C966] " />
                        <div className="text-white text-medium-16 light:text-light-primary">
                            {aboutMe.availabilityStatus}
                        </div>
                    </div>
                    <button
                        className={cn(
                            'max-h-[39px] rounded-[60px] border px-5 py-3 flex-center text-medium-16 text-center',
                            'green:text-[#0F0F0F] green:bg-white',
                            'dark:bg-white dark:text-[#0057FF] dark:border-[#0057FF]',
                            'light:text-white bg-light-primary'
                        )}
                    >
                        CONNECT NOW
                    </button>
                </div>
            </section>
        </div>
    );
}

export default HomeBanner;
