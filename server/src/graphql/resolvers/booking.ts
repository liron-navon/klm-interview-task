const mockBooking = require('../../bookings-mock.json');

export const booking = (root, { code, lastName }) => {
    return mockBooking.find(({ bookingCode, passenger }) => {
        return bookingCode === code && passenger.lastName === lastName;
    });
};
