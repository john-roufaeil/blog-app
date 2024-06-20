import React from 'react';
import { useQuery } from '@apollo/client';


export default function Card() {
    return (
        <div className="border-grey-50 rounded-lg border-2 w-1/4 h-64 m-4
        hover:border-primary hover:cursor-pointer transition-colors duration-50
        hover:bg-orange-50  group">
            <div className=' p-4 flex flex-col align-between justify-between border-transparent
             group-hover:border-primary border-2 w-full h-full'>
                <div>
                    <p className="font-semibold text-secondary text-lg group-hover:text-primary">Title</p>
                    <p className="font-mono"> @username </p>
                    <p className="text-wrap h-1/"> Voluptates, accusantiuasdfasdfsadfsadfm sint laudantium fugiat debitis in vitae libero explicabo cum totam illo.</p>
                </div>
                <p className="">... comments</p>
            </div>
        </div >
    );
};