'use client';
import { useQuery } from '@apollo/client';
import { GET_DETAILS } from '../../../../graphQL/queries';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import LoadingPost from '@/app/components/LoadingPost';

const PostPage = () => {
    const { id } = useParams();
    const { data, loading, error } = useQuery(GET_DETAILS, {
        variables: { id },
    });
    if (error) return <p>Error: {error.message}</p>;

    const post = data?.post;

    return (
        <div className="bg-white w-4/5 mx-auto my-12 p-4 text-black rounded-lg">
            {loading ? (
                <LoadingPost />
            ) : (
                <>
                    <div className="my-6 flex items-center">
                        <Link href="/" passHref>
                            <ChevronLeftIcon className="w-8 mr-4 hover:cursor-pointer hover:text-primary transition-colors duration-300" />
                        </Link>
                        <div>
                            <h1 className="text-primary text-2xl uppercase">{post?.title}</h1>
                            <p className="font-mono">Posted by {post?.user.email}</p>
                        </div>
                    </div>
                    <div className='mx-12'>
                        <p className='text-lg mb-12'>{post?.body}</p>
                        {/* <hr className="border-6 border-black" /> */}
                        {data.post.comments.map((comment) => (
                            <div className='bg-gray-100 rounded-lg my-4 p-4 w-3/4' key={comment.id}>
                                <p className='font-mono'> Comment by {comment.email}</p>
                                <p className=''> {comment.body} </p>
                            </div>
                        ))}
                    </div>
                </>
            )
            }
        </div >
    );
};

export default PostPage;
