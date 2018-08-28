import * as express from 'express';
import * as morgan  from 'morgan';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { schema } from 'src/graphql/schema';
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');

const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';
const app = express();

//catch unhandled errors
process.on('uncaughtException', function(err) {
    console.error( 'UNCAUGHT EXCEPTION', err.stack, err.message );
});

// required for graphql to resolve request body in express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (!isProduction) {
    // logs calls
    app.use(morgan('tiny'));

    // let any domain call this api (prevent cors errors for development)
    app.use(cors());

    // allows interface to test and debug queries
    app.use('/graphiql', graphiqlExpress({
        endpointURL: '/graphql'
    }));
}

app.use('/graphql', graphqlExpress({ schema }));

// start the server and listen to the port
app.listen(port, () => console.log(`App listening on port ${port}!`));