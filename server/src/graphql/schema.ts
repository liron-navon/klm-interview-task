import { makeExecutableSchema } from 'graphql-tools';
const typeDefs = require('./typeDefs.graphql');
const mock = require('../mock.json');

const mockBooking = mock;

const resolvers = {
    Query: {
        booking: () => mockBooking
    }
};

export const schema = makeExecutableSchema({typeDefs, resolvers});

