/* eslint-disable import/prefer-default-export */
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const graphqlUrl = process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:4000';

export const client = new ApolloClient({
    link: new HttpLink({ uri: graphqlUrl }),
    cache: new InMemoryCache(),
});
