import { gql } from '@apollo/client';

export const GET_POSTS = gql`
    query GetPosts {
        posts {
            id
        }
    }
`;

export const GET_USERS = gql`
    query GetUsers {
        users {
            id
        }
    }
`;

export const GET_COMMENTS = gql`
    query GetComments {
        comments {
            id
        }
    }
`;

export const GET_HOMEPAGE = gql`
    query Homepage {
        posts {
            id,
            title,
            body,
            comments {
                id
            },
            user {
                email
            }
        }
    }
`;

export const GET_DETAILS = gql`
    query Details($id: String!) {
        post(id: $id) {
            title,
            body,
            comments {
                body,
                email
            },
            user {
                email
            }
        }
    }
`;
