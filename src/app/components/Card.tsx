import React from 'react';
import Link from 'next/link';

export default function Card({ post }) {
    const { id, title, user, body, comments } = post;
    return (
        <Link href={`/posts/${id}`} as={`/posts/${id}`}
            className="border-grey-50 rounded-lg border-2 w-full  lg:w-1/4 md:w-1/3 h-64 m-4
        hover:border-primary hover:cursor-pointer transition-colors duration-50
        hover:bg-orange-50  group">
            <div className=' p-4 flex flex-col align-between justify-between border-transparent
                    group-hover:border-primary border-2 w-full h-full'>
                <div>
                    <p className="font-semibold text-secondary md:text-lg group-hover:text-primary">{title.slice(0, 30)}</p>
                    <p className="font-mono overflow-hidden"> {user.email}  </p>
                    <p className="h-1 pt-2 text-sm"> {body.slice(0, 50)}... </p>
                </div>
                <p className=""> {comments.length} comments</p>
            </div>
        </Link>
    );
};
