/* eslint-disable import/no-extraneous-dependencies */
import { ApolloServer } from 'apollo-server-micro';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { ServerResponse, IncomingMessage } from 'http';
import { typeDefs, resolvers } from '../../graphQL/server';

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

const startServer = apolloServer.start();

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: MicroRequest, res: ServerResponse<IncomingMessage>) {
    await startServer;
    await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}

// let serverStart: Promise<void>;

// export default async function handler(res: ServerResponse<IncomingMessage>, req: MicroRequest) {
//     if (!serverStart) {
//         serverStart = apolloServer.start();
//     }
//     await serverStart;
//     await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
// }
