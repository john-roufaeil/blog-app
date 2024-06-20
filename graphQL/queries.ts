import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      userId
      title
      body
      user {
        id
        name
        username
      }
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      username
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
