import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {findBookingQuery} from "./graphqlQueries/findBooking";
import {Booking} from '../interfaces/booking';
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo: Apollo) {}

  findBooking(variables: {code: string, lastName: string}): Observable<Booking | null> {
    return this.apollo
      .query<{ booking: Booking }>({
        query: findBookingQuery,
        variables
      })
      .pipe(
        map((result) => result.data.booking)
      )
  }
}
