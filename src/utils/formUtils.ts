import { Dispatch, SetStateAction } from "react";

export function handleClearForm(setters: Array<Dispatch<SetStateAction<string>>>) {
    setters.forEach(setter => setter(""));
}

export function handleCreatePost(email: string, title: string, body: string) {
    return function (event: any) {
        event.preventDefault();
        const error = validateForm(email, title, body);
        if (error === '') {
            console.log('Post created:', { email, title, body });
            // go to homepage
        } else {
            console.log(error);
        }
    }
}


export function validateForm(email: string, title: string, body: string): string {
    if (email.trim() === '')
        return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
        return 'Invalid email address';
    if (title.trim() === '')
        return 'Title is required';
    if (body.trim() === '')
        return 'Post body is required';
    return '';
}
