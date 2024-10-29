import Link from 'next/link';

import Button from '@/components/base/button/Button';
import Image from '@/components/base/Image';
import { TextTitle } from '@/components/TextTitle';
import data from '@/data/data.json';
import { cn } from '@/lib/utils';

const { aboutMe } = data;

function AboutMe() {
    return (
        <section className="dark:bg-theme-background green:bg-[#131414] p-24 max-lg:px-5 max-lg:py-10">
            <TextTitle title={'ABOUT ME'} className="title-border light:border-[#2726264D]" />
            <div className="mt-12 flex items-start gap-16 max-lg:flex-col max-lg:gap-8">
                <Image
                    src={aboutMe.avatar}
                    width={553}
                    height={378}
                    className="aspect-[553/378] w-[85%] object-contain max-lg:aspect-[335/229] max-lg:min-w-full"
                    alt={''}
                />
                <div className="w-full">
                    <div className="text-style-1 text-title-h3 max-lg:text-md-title-h3">
                        {aboutMe.message.title}
                    </div>
                    <p
                        className={cn(
                            'mt-6  text-body-16 max-lg:mt-5 max-lg:text-md-body-14',
                            'light:text-[#545151]',
                            'dark:text-[#E9E9E9]',
                            'green:text-[#E9E9E9]'
                        )}
                    >
                        {aboutMe.message.description}
                    </p>

                    <Link href={'/about-me'}>
                        <Button
                            label={'VIEW MORE ABOUT ME'}
                            className="px-6 py-3 max-lg:px-5 mt-8"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
