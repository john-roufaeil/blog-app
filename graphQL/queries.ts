import { gql } from '@apollo/client';

// export const GET_POSTS = gql`
//   query GetPosts {
//     posts {
//       id
//       title
//       body
//       comments {
//         body

//       }
//       user {
//         id
//         name
//         email
//         username
//       }
//     }
//   }
// `;

// export const GET_USERS = gql`
//   query GetUsers {
//     users {
//       id
//       name
//       email
//     }
//   }
// `;

// export const GET_COMMENTS = gql`
//   query GetComments {
//     comments {
//       postId
//       id
//       name
//       body
//     }
//   }
// `;

export const GET_HOMEPAGE = gql`
query Homepage {
    posts {
        title,
        body,
        comments {
            body
        },
        user {
            email
        }
    }
}`;

export const GET_DETAILS = gql`
query Details {
    posts {
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
}`;