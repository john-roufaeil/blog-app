/* eslint-disable import/no-extraneous-dependencies */
import { ApolloServer } from 'apollo-server-micro';
// import { MicroRequest } from 'apollo-server-micro/dist/types';
// import { ServerResponse, IncomingMessage } from 'http';
import { typeDefs, resolvers } from '../../graphQL/server';

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

// const startServer = apolloServer.start();

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

// export default async function handler(req: MicroRequest, res: ServerResponse<IncomingMessage>) {
//     await startServer;
//     await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
// }

export const config = {
    api: {
        bodyParser: false,
    },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
