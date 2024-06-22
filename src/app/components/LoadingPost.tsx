import React from 'react';
import { CircularProgress } from '@mui/material';

export default function LoadingPost() {
    return (
        <div className="p-4 flex flex-col items-center justify-center border-transparent
             border-2 w-full h-full text-primary"
        >
            <CircularProgress color="primary" size={60} className="w-1/3 mb-2" />
            <p className="font-semibold text-lg">Loading Post...</p>
        </div>
    );
}
