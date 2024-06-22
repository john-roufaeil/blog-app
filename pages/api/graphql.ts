/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import { ApolloServer } from 'apollo-server-micro';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { ServerResponse, IncomingMessage } from 'http';
import Cors from 'micro-cors';
import { typeDefs, resolvers } from '../../graphQL/server';

const cors = Cors({
    origin: '*', // Adjust this to your allowed origins
    allowCredentials: true,
});

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

const handler = async (req: MicroRequest, res: ServerResponse<IncomingMessage>) => {
    if (req.method === 'OPTIONS') {
        res.end();
        return false;
    }
    await startServer;
    await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
};

export default cors(handler);
