import gql from 'graphql-tag';

export const findBookingQuery = gql`
  query getBooking($code: ID!, $lastName: String!) {
    booking(code: $code, lastName: $lastName) {
      itinerary{
        connections{
          duration
          destination{
            name
          }
          origin{
            name
          }
        }
      }
      passenger{
        lastName
        title{
          name
        }
      }
    }
  }
`;
