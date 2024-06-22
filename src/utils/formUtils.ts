/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/ban-types */
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { Dispatch, SetStateAction } from 'react';

export function handleClearForm(setters: Array<Dispatch<SetStateAction<string>>>, showSnackbar: Function) {
    setters.forEach((setter) => setter(''));
    showSnackbar('Form has been cleared.', 'info');
}

export function validateForm(email: string, title: string, body: string): string {
    if (email.trim() === '') return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Invalid email address';
    if (title.trim() === '') return 'Title is required';
    if (body.trim() === '') return 'Post body is required';
    return '';
}

export function handleCreatePost(
    email: string,
    title: string,
    body: string,
    router: AppRouterInstance,
    showSnackbar: Function,
) {
    return async function (event: { preventDefault: () => void; }) {
        event.preventDefault();
        const error = validateForm(email, title, body);
        if (error === '') {
            showSnackbar('Post created successfully!', 'success');
            router.push('/');
        } else {
            showSnackbar(error, 'error');
        }
    };
}
