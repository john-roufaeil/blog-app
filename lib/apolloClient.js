import pkg from '@apollo/client';
const { ApolloClient, InMemoryCache, HttpLink } = pkg;

export const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:4000' }),
    cache: new InMemoryCache(),
});
