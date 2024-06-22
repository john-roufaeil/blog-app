'use client';

import { useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import LoadingPost from '@/app/components/LoadingPost';
import { GET_DETAILS } from '../../../../graphQL/queries';
import { Comment } from '../../../utils/types';

export default function PostPage() {
    const { id } = useParams();
    const { data, loading, error } = useQuery(GET_DETAILS, {
        variables: { id },
    });
    if (error) {
        return (
            <p>
                Error:
                {error.message}
            </p>
        );
    }

    const post = data?.post;

    return (
        <div className="bg-white w-4/5 mx-auto my-12 p-4 text-black rounded-lg">
            {loading ? (
                <LoadingPost />
            ) : (
                <>
                    <div className="my-6 flex items-center">
                        <Link href="/" passHref>
                            <ChevronLeftIcon className="w-8 mr-4 hover:cursor-pointer
                            hover:text-primary transition-colors duration-300"
                            />
                        </Link>
                        <div>
                            <h1 className="text-primary text-2xl uppercase">{post?.title}</h1>
                            <p className="font-mono">
                                Posted by
                                {post?.user.email}
                            </p>
                        </div>
                    </div>
                    <div className="mx-12">
                        <p className="text-lg mb-12">{post?.body}</p>
                        {data.post.comments.map((comment: Comment) => (
                            <div className="bg-gray-100 rounded-lg my-4 p-4 md:w-3/4 w-full" key={comment.id}>
                                <p className="font-mono overflow-clip">
                                    Comment by
                                    {comment.email}
                                </p>
                                <p>
                                    {comment.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
