import React from 'react';

import { Assets } from '@/assets';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import AboutMeSection from '@/features/about-me/components/AboutMeSection';
import EducationSection from '@/features/about-me/components/EducationSection';
import ExperienceSection from '@/features/about-me/components/ExperienceSection';
import SkillSection from '@/features/home/components/SkillSection';
import { Theme } from '@/lib/constant';
import { getCookieTheme } from '@/lib/theme';

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
                <Header theme={{ text: 'text-white', title: 'text-white' }} />

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
            <Footer
                theme={{
                    social: 'text-[#D2DEFC]',
                    message: '!text-white',
                    email: 'text-[#D2DEFC]',
                    copyright: 'text-[#BBBBBB]',
                    router: 'text-[#BBBBBB]',
                    routerContainer: 'light:pt-5 light:border-light-primary',
                }}
            />
        </div>
    );
}

export default AboutMePage;
