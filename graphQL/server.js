/* eslint-disable import/no-extraneous-dependencies */
// import { ApolloServer } from '@apollo/server';
import { ApolloServer, gql } from 'apollo-server-micro';
import fetch from 'node-fetch';

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
        posts: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            return response.json();
        },
        post: async (_, { id }) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            return response.json();
        },
        users: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            return response.json();
        },
        comments: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            return response.json();
        },
    },
    Post: {
        user: async (parent) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${parent.userId}`);
            return response.json();
        },
        comments: async (parent) => {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const comments = await response.json();
            return comments.filter((c) => c.postId === parent.id);
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

export default async function handler(req, res) {
    await startServer;
    await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}
