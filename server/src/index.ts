import { ApolloServer, gql } from 'apollo-server-express';
import * as express from 'express';
import {typeDefs, resolvers} from 'src/graphql/schema';

const port = process.env.PORT || 3000;
const isPlaygroundActive = process.env.NODE_ENV !== 'production';
const app = express();

// create an apollo server
const server = new ApolloServer({
    typeDefs: gql`${typeDefs}`,
    resolvers,
    playground: isPlaygroundActive
});

// add graphql middleware
server.applyMiddleware({ app, path: '/graphql' });

// start listening on the port
app.listen(port, () => {
    const playgeroundMessage = isPlaygroundActive ? 'with playground' : 'without playground';
    console.log(`🚀 Server ready at http://localhost:${port}/graphql ${playgeroundMessage}`);
});
