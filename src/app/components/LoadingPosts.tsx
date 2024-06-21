import React from 'react';
import { CircularProgress } from "@mui/material";

export default function LoadingPosts() {
    return (
        <div className="border-grey-50 rounded-lg border-2 h-64 w-full md:w-1/3 lg:w-1/4 m-4">
            <div className=' p-4 flex flex-col items-center justify-center border-transparent
             border-2 w-full h-full text-secondary'>
                <CircularProgress color="secondary" size={60} className="w-1/3 mb-2" />
                <p className="font-semibold text-lg">Loading Posts...</p>
            </div>
        </div>
    );
};
