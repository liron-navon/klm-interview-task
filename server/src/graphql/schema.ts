import { booking } from 'src/graphql/resolvers/booking';
import { bookings } from 'src/graphql/resolvers/bookings';

export const typeDefs = require('./typeDefs.graphql');
export const resolvers = {
    Query: {
        booking,
        bookings
    }
};


