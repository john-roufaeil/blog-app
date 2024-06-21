export function handleClear(setters) {
    setters.forEach(setter => setter(""));
}

export function handleCreate(event, email: string, title: string, body: string) {
    event.preventDefault();
    console.log('Post created:', { email, title, body });
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
