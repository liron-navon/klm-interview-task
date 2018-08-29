const typeDefs = require('src/graphql/typeDefs.graphql');
import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools';
import {graphql} from 'graphql';

describe('Booking Schema', () => {

    const schema = makeExecutableSchema({typeDefs});
    addMockFunctionsToSchema({schema});

    test('querying bookings should work', () => {
        expect.assertions(2);
        const query = `
            query getBookings {
                bookings {
                    bookingCode
                }
            }
        `;
        return graphql(schema, query).then((result) => {
            const bookingId = result.data.bookings[0].bookingCode;

            // we should get a standard 36 character uuid here
            expect(typeof bookingId).toBe('string');
            expect(bookingId.length).toBe(36);
        });
    });

    test('querying booking by id and name should work', () => {
        expect.assertions(2);
        const query = `
            query getBooking($code: ID!, $lastName: String!) {
              booking(code: $code, lastName: $lastName) {
                bookingCode
              }
            }
        `;
        const variables = {
            code: 'mock code',
            lastName: 'mock last name'
        };
        return graphql(schema, query, undefined, undefined, variables).then((result) => {
            const bookingId = result.data.booking.bookingCode;

            // we should get a standard 36 character uuid here
            expect(typeof bookingId).toBe('string');
            expect(bookingId.length).toBe(36);
        });
    });

    test('querying bookings poorly should fail', () => {
        expect.assertions(1);
        const query = `
            query getBooking($code2: ID!, $lastName1: String!) {
              booking(code: $code, lastName: $lastName) {
                bookingCode
              }
            }
        `;
        const variables = {
            code: 34,
            lastName: true
        };
        return graphql(schema, query, undefined, undefined, variables).then((result) => {
            expect(result.errors.length).toBeGreaterThan(0)
        });
    });
});