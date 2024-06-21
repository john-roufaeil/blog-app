'use client';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { handleClearForm, handleCreatePost } from '@/utils/formUtils';
import { useSnackbar } from '@/context/SnackbarContext';

const CreatePostPage = () => {
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const router = useRouter();
    const { showSnackbar } = useSnackbar();

    const handleSubmit = handleCreatePost(email, title, body, router, showSnackbar);

    // const handleSubmit = (event: any) => {
    //     event.preventDefault();
    //     handleCreatePost(email, title, body, router)(event);
    // };

    return (
        <div className="bg-white w-4/5 mx-auto my-12 p-4 text-black rounded-lg">
            <div className="my-6 flex items-center">
                <Link href="/" passHref>
                    <ChevronLeftIcon className="w-8 mr-4 hover:cursor-pointer hover:text-primary transition-colors duration-300" />
                </Link>
                <div>
                    <h1 className="text-primary text-2xl">Create a New Post</h1>
                </div>
            </div>
            <form className='m-8' onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row md:justify-between mb-8 space-y-8 md:space-y-0'>
                    <TextField
                        id="email-field"
                        label="Email"
                        type="text"
                        variant="filled"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className='w-full md:w-5/12 my-4 md:m-0'
                    />
                    <TextField
                        id="title-field"
                        label="Post Title"
                        type="text"
                        variant="filled"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        className='w-full md:w-6/12 my-4 md:m-0'
                    />
                </div>
                <TextField
                    className="w-full"
                    id="filled-multiline-static"
                    label="Post Body"
                    type="text"
                    multiline
                    rows={4}
                    variant="filled"
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                />

                <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 justify-evenly mt-12'>
                    <Button
                        variant="outlined"
                        size="large"
                        onClick={() => handleClearForm([setEmail, setTitle, setBody], showSnackbar)}
                    >
                        Clear Form
                    </Button>
                    <Button type="submit" variant="contained" size="large">Create Post</Button>
                </div>
            </form>
        </div >
    );
};

export default CreatePostPage;
