import React from 'react';
import { useQuery } from '@apollo/client';
// import AddOutlineIcon from ''


export default function CreatePostBtn() {
    return (
        <div className="border-grey-50 rounded-lg border-2 w-1/4 min-h-64 m-4 p-4 hover:border-primary hover:cursor-pointer transition-colors duration-500 hover:border-4 hover:bg-orange-50 flex justify-center align-middle">
            <div>

                <p>Create New Post</p>
            </div>
        </div>
    );
};