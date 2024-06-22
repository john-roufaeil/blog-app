/* eslint-disable import/prefer-default-export */
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const graphqlUrl = '/api/graphql';

export const client = new ApolloClient({
    link: new HttpLink({ uri: graphqlUrl }),
    cache: new InMemoryCache(),
});
