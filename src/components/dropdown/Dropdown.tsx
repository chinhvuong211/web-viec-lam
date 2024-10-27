'use client';
import React, { useRef, useState } from 'react';

import useOutsideClick from '@/hooks/useOutsideClick';
import { cn } from '@/lib/utils';
interface IProps<T> {
    children: (open: boolean) => React.ReactNode;
    className?: string;
    items: T[];
    renderItems?: (item: T, { close }: { close?: () => void }) => React.ReactNode;
}
function Dropdown<T>(props: IProps<T>) {
    const { children, className, items, renderItems } = props;
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    useOutsideClick(ref, () => {
        setIsOpen(false);
    });

    return (
        <div className={cn('relative inline-block', className)} ref={ref}>
            <div
                className={cn(
                    'rounded-md cursor-pointer flex-center ',
                    'transform transition-all duration-200 ease-out'
                )}
                onClick={toggleDropdown}
            >
                {children(isOpen)}
            </div>
            <div
                className={cn(
                    'absolute right-0 z-10 mt-[6px] w-[146px] origin-top-right',
                    'bg-white border border-gray-200  rounded-md shadow-lg overflow-hidden',
                    'transform transition-all duration-200 ease-out',
                    isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                )}
            >
                {items.map((item) => (
                    <div key={JSON.stringify(item)}>
                        {renderItems?.(item, {
                            close() {
                                setIsOpen(false);
                            },
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dropdown;
