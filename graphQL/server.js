import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { gql } from 'apollo-server';
import fetch from 'node-fetch';

const typeDefs = gql`
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

  type Mutation {
    addPost(title: String!, body: String!, email: String!): Post
  }
`;

const resolvers = {
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
    // Mutation: {
    //     addPost: async (_, { title, body, email }) => {
    //         let userId = 1;
    //         let user = null;
    //         if (email) {
    //             const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    //             const users = await usersResponse.json();
    //             user = users.find((user) => user.email === email);
    //             if (!user) {
    //                 const createUserResponse = await fetch('https://jsonplaceholder.typicode.com/users', {
    //                     method: 'POST',
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                     },
    //                     body: JSON.stringify({ id: userId, email }),
    //                 });
    //                 user = await createUserResponse.json();
    //             }
    //             userId = user.id;
    //         }

    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 title,
    //                 body,
    //                 user
    //             }),
    //         });

    //         return response.json();
    //     },
    // },

};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

await startStandaloneServer(server, {
    listen: { port: 4000 },
});
