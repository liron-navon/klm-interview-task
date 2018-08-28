import { makeExecutableSchema } from 'graphql-tools';
const typeDefs = require('./typeDefs.graphql');
const mock = require('../bookings-mock.json');

const mockBooking = mock;

const resolvers = {
    Query: {
        bookings: () => mockBooking,
        booking: (root, { code, lastName }) =>  mockBooking.find(({ bookingCode, passenger }) => {
                return bookingCode === code && passenger.lastName === lastName
            })
    }
};

export const schema = makeExecutableSchema({typeDefs, resolvers});

