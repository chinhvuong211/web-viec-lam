'use client';

import Link from 'next/link';

import { Template } from '@/lib/constant';

const templates = [
    {
        link: Template.DEVELOPER_1,
        name: 'Developer style 1',
    },
    {
        link: Template.DEVELOPER_2,
        name: 'Developer style 2',
    },
    {
        link: Template.DEVELOPER_3,
        name: 'Developer style 3',
    },
    {
        link: Template.MARKETING_1,
        name: 'Marketing style 1',
    },
    {
        link: Template.MARKETING_2,
        name: 'Marketing style 2',
    },
    {
        link: Template.MARKETING_3,
        name: 'Marketing style 3',
    },
];

export default function Index() {
    return (
        <div className="flex flex-col gap-4 items-center mt-40">
            {templates.map((item) => (
                <Link
                    key={item.link}
                    href={`/?template=${item.link}`}
                    className="px-2 py-1 bg-blue-400 hover:bg-blue-500 rounded-md"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(`/?template=${item.link}`, '_blank');
                    }}
                    target="_blank"
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
}
