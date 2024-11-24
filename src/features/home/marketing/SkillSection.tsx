'use client';

import { Transition } from '@headlessui/react';
import { useState } from 'react';

import { Assets } from '@/assets';
import { Icon } from '@/components/base/icon/Icon';
import Image from '@/components/base/Image';
import { SkillItem } from '@/features/common/interface';
import { cn } from '@/lib/utils';

type Props = {
    data: SkillItem[];
};

function SkillSection({ data }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-white">
            <div className="max-w-screen-xxl mx-auto p-24 py-16 max-lg:px-4 max-lg:py-10">
                <div
                    className={cn(
                        'text-[60px] font-semibold leading-[72px] tracking-[-0.01em] text-[#272626]',
                        'flex items-center justify-center gap-3 max-lg:text-[40px] max-lg:leading-[48px]',
                        'max-lg:gap-2.5 max-lg:text-[36px] max-lg:leading-[43px] max-lg:tracking-[-0.02em]'
                    )}
                >
                    The skills I can do{' '}
                    <Image src={Assets.magicWandIcon.src} alt="magic wand" width={56} height={56} />
                </div>
                <div className="flex justify-between mt-10 max-lg:flex-col max-lg:gap-10 max-lg:hidden">
                    <div className="flex flex-col">
                        {data.map((item, index) => {
                            return (
                                <div
                                    className={cn(
                                        'flex gap-8 items-center px-8 pt-6 pb-10 rounded-[16px] cursor-pointer',
                                        activeIndex === index ? 'shadow-sm' : 'hover:bg-gray-50'
                                    )}
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className="min-w-[350px]">
                                        <div className="text-[18px] leading-[23.4px] text-[#2E2B2B]">
                                            {index < 10 && '0'}
                                            {index + 1}
                                        </div>

                                        <div
                                            className={cn(
                                                'text-[32px] leading-[38.4px] font-semibold text-[#272626] mt-3',
                                                activeIndex === index ? 'opacity-100' : 'opacity-0'
                                            )}
                                        >
                                            {item.name}
                                        </div>
                                    </div>
                                    <div className="max-lg:flex max-lg:flex-col max-lg:gap-4 flex items-center">
                                        {activeIndex !== index ? (
                                            <div className="text-[32px] leading-[38.4px] font-semibold text-[#272626]">
                                                {item.name}
                                            </div>
                                        ) : (
                                            <div className="text-[16px] leading-[21.6px] text-[#595959]">
                                                {item.description}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className=" flex-col divide-y divide-[#DFDFDF] hidden max-lg:flex mt-10">
                    {data.map((item, index) => {
                        return (
                            <div
                                className="px-4 py-5"
                                key={index}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="flex flex-center-between">
                                    <div className="text-[18px] leading-[23.4px] text-[#2E2B2B]">
                                        {index < 10 && '0'}
                                        {index + 1}
                                    </div>
                                    <Icon
                                        url={Assets.chevronDownIcon.src}
                                        className={cn(
                                            'transition-all duration-300 ease-in-out',
                                            activeIndex === index ? 'rotate-180' : 'rotate-0'
                                        )}
                                    />
                                </div>
                                <Transition
                                    show={activeIndex === index}
                                    enter="transition-all duration-300 ease-in-out"
                                    enterFrom="opacity-0 h-0"
                                    enterTo="opacity-100 h-auto"
                                    leave="transition-all duration-300 ease-in-out"
                                    leaveFrom="opacity-100 h-auto"
                                    leaveTo="opacity-0 h-0"
                                >
                                    <div className="mt-2">
                                        <div className="text-[20px] leading-[24px] font-semibold text-[#272626]">
                                            {item.name}
                                        </div>
                                        <div className="text-[14px] leading-[18.9px] text-[#595959] mt-4">
                                            {item.description}
                                        </div>
                                    </div>
                                </Transition>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default SkillSection;
