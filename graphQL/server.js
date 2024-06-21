import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { gql } from 'apollo-server';
import fetch from 'node-fetch';

const typeDefs = gql`
  type Post {
    userId: Int
    id: Int
    title: String
    body: String
    user: User
    comments: [Comment!]
  }

  type User {
    id: Int
    name: String
    username: String
    email: String
  }

  type Comment {
    postId: Int
    id: Int
    name: String
    email: String
    body: String
  }

  type Query {
    posts: [Post]
    users: [User]
    comments: [Comment]
  }
`;

const resolvers = {
    Query: {
        posts: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
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

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`Server listening at port ${url}`);
