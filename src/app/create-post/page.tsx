'use client';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { TextField, Button } from '@mui/material';

const CreatePostPage = () => {
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
            <form className='m-12'>
                <div className='flex justify-between mb-8'>
                    <TextField id="email-field" label="Email" variant="filled" className='w-5/12' />
                    <TextField id="title-field" label="Post Title" variant="filled" className='w-6/12' />
                </div>
                <TextField
                    className="m-4 w-full"
                    id="filled-multiline-static"
                    label="Post Body"
                    multiline
                    rows={4}
                    variant="filled"
                />

                <div className='flex justify-evenly mt-12'>
                    <Button variant="outlined" size="large">Clear Form</Button>
                    <Button variant="contained" size="large">Create Post</Button>
                </div>
            </form>
        </div >
    );
};

export default CreatePostPage;
