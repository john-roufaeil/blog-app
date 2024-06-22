/* eslint-disable import/no-extraneous-dependencies */
// import { ApolloServer } from '@apollo/server';
import { ApolloServer, gql } from 'apollo-server-micro';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { ServerResponse, IncomingMessage } from 'http';
import fetch from 'node-fetch';
import { Post, User, Comment } from '../src/utils/types';

export const typeDefs = gql`
  type Post {
    userId: String
    id: String
    title: String
    body: String
    user: User
    comments: [Comment!]
  }

  type User {
    id: String
    name: String
    username: String
    email: String
  }

  type Comment {
    postId: String
    id: String
    name: String
    email: String
    body: String
  }

  type Query {
    posts: [Post]
    post(id: String!): Post
    users: [User]
    comments: [Comment]
  }
`;

export const resolvers = {
    Query: {
        posts: async (): Promise<Post[]> => {
            console.log('Fetching posts...');
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            console.log('Posts fetched:', response.json());
            return await response.json() as Post[];
        },
        post: async (_: unknown, { id }: { id: string }): Promise<Post> => {
            console.log('Fetching post...');
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            console.log('Post fetched:', response.json());
            return await response.json() as Post;
        },
        users: async (): Promise<User[]> => {
            console.log('Fetching users...');
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            console.log('Users fetched:', response.json());
            return await response.json() as User[];
        },
        comments: async (): Promise<Comment[]> => {
            console.log('Fetching comments...');
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            console.log('Comments fetched:', response.json());
            return await response.json() as Comment[];
        },
    },
    Post: {
        user: async (parent: Post): Promise<User> => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${parent.userId}`);
            return await response.json() as User;
        },
        comments: async (parent: Post): Promise<Comment[]> => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${parent.id}`);
            return await response.json() as Comment[];
        },
    },
};

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

const startServer = apolloServer.start();

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: MicroRequest, res: ServerResponse<IncomingMessage>) {
    await startServer;
    await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}
