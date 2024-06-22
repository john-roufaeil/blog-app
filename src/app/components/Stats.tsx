import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS, GET_USERS, GET_COMMENTS } from '../../../graphQL/queries';

export default function Stats() {
    const { data: postsData } = useQuery(GET_POSTS);
    const { data: usersData } = useQuery(GET_USERS);
    const { data: commentsData } = useQuery(GET_COMMENTS);

    const stats = [
        { name: 'Users', value: usersData ? usersData.users.length.toString() : 'Loading...' },
        { name: 'Blogs', value: postsData ? postsData.posts.length.toString() : 'Loading...' },
        { name: 'Comments', value: commentsData ? commentsData.comments.length.toString() : 'Loading...' },
    ];

    return (
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div key={stat.name} className="flex flex-col-reverse">
                        <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                        <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                            {stat.value}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
