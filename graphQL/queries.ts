import { gql } from '@apollo/client';

export const GET_POSTS = gql`
    query GetPosts {
        posts {
        id
        title
        body
        }
    }
`;

export const GET_USERS = gql`
    query GetUsers {
        users {
        id
        name
        email
        }
    }
`;

export const GET_COMMENTS = gql`
    query GetComments {
        comments {
        postId
        id
        name
        body
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

// export const ADD_POST = gql`
//     mutation AddPost($title: String!, $body: String!, $email: String!) {
//         addPost(title: $title, body: $body, email: $email) {
//             id
//             title
//             body
//             user {
//                 id
//                 email
//             }
//         }
//     }
// `;
