'use client';
import { useQuery } from '@apollo/client';
import Stats from "./components/Stats";
import { GET_HOMEPAGE } from './../../graphQL/queries';
import CreatePostBtn from "./components/CreatePostBtn";
import Card from "./components/Card";
import LoadingPosts from './components/LoadingPosts';

export default function Home() {
    const { loading, error, data } = useQuery(GET_HOMEPAGE);
    if (error) return <p>Error: {error.message}</p>;

    return (
        <main>
            <div className="relative isolate overflow-hidden pt-24 sm:pt-32 bg-primary">
                <div className="mx-auto w-4/5">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl"> BlogBytes </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-100">
                            Your convenient platform to share your thoughts
                        </p>
                    </div>
                    <Stats />
                </div>
            </div>
            <div className="bg-white w-4/5 mx-auto my-12 p-4 rounded-lg flex flex-wrap justify-evenly">
                <CreatePostBtn />
                {loading ? (
                    <LoadingPosts />
                ) : (
                    data.posts.map((post) => <Card key={post.id} post={post} />)
                )}
            </div>
        </main>
    )
}
