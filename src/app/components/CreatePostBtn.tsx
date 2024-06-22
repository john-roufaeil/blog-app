import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function CreatePostBtn() {
    return (
        <Link
            href="/create-post"
            className="border-grey-50 rounded-lg border-2 w-full lg:w-1/4 md:w-1/3 h-64 m-4
        hover:border-primary hover:cursor-pointer transition-colors duration-50
        hover:bg-orange-50  group"
        >
            <div className="p-4 flex flex-col items-center justify-center border-transparent
             group-hover:border-primary border-2 w-full h-full text-secondary group-hover:text-primary"
            >
                <PlusCircleIcon className="w-1/3 mb-2" />
                <p className="font-semibold text-lg text-center">Create a New Post</p>
            </div>
        </Link>
    );
}
