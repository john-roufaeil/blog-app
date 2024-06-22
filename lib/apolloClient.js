/* eslint-disable import/prefer-default-export */
import { ApolloClient, InMemoryCache } from '@apollo/client';

const graphqlUrl = '/api/graphql';

export const client = new ApolloClient({
    uri: graphqlUrl,
    cache: new InMemoryCache(),
});
