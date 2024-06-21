import React from 'react';
import { useQuery } from '@apollo/client';
// import PlusCircle
import { PlusCircleIcon } from '@heroicons/react/24/outline'

export default function CreatePostBtn() {
    return (
        <div className="border-grey-50 rounded-lg border-2 sm:w-1/4 h-64 m-4
        hover:border-primary hover:cursor-pointer transition-colors duration-50
        hover:bg-orange-50  group">
            <div className=' p-4 flex flex-col items-center justify-center border-transparent
             group-hover:border-primary border-2 w-full h-full text-secondary group-hover:text-primary'>
                <PlusCircleIcon className="w-1/3 mb-2" />
                <p className="font-semibold text-lg">Create a New Post</p>
            </div>
        </div>
    );
};