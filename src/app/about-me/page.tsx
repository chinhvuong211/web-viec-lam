import React from 'react';

import { Assets } from '@/assets';
import Header from '@/components/layout/Header';
import AboutMeSection from '@/features/about-me/components/AboutMeSection';
import EducationSection from '@/features/about-me/components/EducationSection';
import ExperienceSection from '@/features/about-me/components/ExperienceSection';
import SkillSection from '@/features/home/components/SkillSection';
import { Theme } from '@/lib/constant';
import { getCookieTheme } from '@/lib/theme';

const bgMapping = {
    [Theme.DARK]: '',
    [Theme.LIGHT]: '',
    [Theme.GREEN]: Assets.backgroundGreen.src,
};

function Page() {
    const bg = bgMapping[getCookieTheme()];

    return (
        <div>
            <div
                className="bg-theme-background bg-cover bg-no-repeat object-cover light:max-lg:h-fit "
                style={{ backgroundImage: bg && `url("${bg}")` }}
            >
                <Header />
                <div className="pt-[11.375rem] max-lg:pt-24 max-w-screen-xxl mx-auto">
                    <h1 className="text-style-1 px-24 text-title-h2 max-lg:px-5 max-lg:text-md-title-h1 ">
                        ABOUT ME
                    </h1>
                </div>

                <AboutMeSection />
            </div>
            <ExperienceSection />
            <EducationSection />
            <SkillSection />
        </div>
    );
}

export default Page;
