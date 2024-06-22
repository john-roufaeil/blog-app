export interface Post {
    userId: string;
    id: string;
    title: string;
    user: User
    body: string;
    comments: Comment[];
}

export interface Comment {
    postId: string
    id: string
    name: string
    email: string
    body: string
}

export interface User {
    id: string
    name: string
    username: string
    email: string
}

export interface CardProps {
    post: Post;
}
