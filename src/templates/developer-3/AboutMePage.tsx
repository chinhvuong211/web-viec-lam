import React from 'react';

import { Assets } from '@/assets';
import AboutMeSection from '@/features/about-me/components/AboutMeSection';
import EducationSection from '@/features/about-me/components/EducationSection';
import ExperienceSection from '@/features/about-me/components/ExperienceSection';
import SkillSection from '@/features/home/components/SkillSection';
import { Theme } from '@/lib/constant';
import { getCookieTheme } from '@/lib/theme';

import Developer3Footer from './components/Footer';
import Developer3Header from './components/Header';

const bgMapping = {
    [Theme.DEVELOPER_1]: '',
    [Theme.DEVELOPER_3]: '',
    [Theme.DEVELOPER_2]: Assets.backgroundGreen.src,
};

function AboutMePage() {
    const bg = bgMapping[getCookieTheme()];

    return (
        <div>
            <div
                className="bg-theme-background bg-cover bg-no-repeat object-cover light:max-lg:h-fit "
                style={{ backgroundImage: bg && `url("${bg}")` }}
            >
                <Developer3Header />
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
            <Developer3Footer />
        </div>
    );
}

export default AboutMePage;
