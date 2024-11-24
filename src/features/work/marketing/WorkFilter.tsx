'use client';
import React, { useState } from 'react';

import SingleSelect from '@/components/dropdown/SingleSelect';
import { cn } from '@/lib/utils';

const tabs = ['All', 'Campaign', 'Content', 'Social Media'];

function WorkFilter() {
    const [currentType, setCurrentType] = useState<string>('All');
    return (
        <div
            className={cn(
                'flex-center-between max-lg:w-full max-lg:flex-col max-lg:gap-3 mb-8 border-b',
                'max-lg:border-none'
            )}
        >
            <SingleSelect
                className="max-lg:w-full hidden max-lg:block"
                items={tabs.map((item) => ({ label: item, value: item }))}
                customLabel={(item) => `Type: ${item.label}`}
            />

            <div className="flex items-center gap-2 max-lg:hidden -mb-2">
                {tabs.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={cn(
                                'flex px-4 flex-center text-body-16 py-2 border-b-2',
                                currentType === item
                                    ? ' border-black'
                                    : 'cursor-pointer border-transparent'
                            )}
                            onClick={() => {
                                setCurrentType(item);
                            }}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>

            <div
                className={cn(
                    'gap-2 green:text-[#C1C1C1] dark:text-[#C1C1C1] light:text-light-primary max-lg:w-full',
                    'flex-center text-body-16 mb-2'
                )}
            >
                <div className="max-lg:hidden">Sort</div>
                <SingleSelect
                    className="max-lg:w-full"
                    items={[
                        {
                            label: '2024',
                            value: '',
                        },
                        {
                            label: '2023',
                            value: '',
                        },
                    ]}
                />
            </div>
        </div>
    );
}

export default WorkFilter;
