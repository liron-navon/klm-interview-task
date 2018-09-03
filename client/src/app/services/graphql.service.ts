import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {findBookingQuery} from "./graphqlQueries/findBooking";
import {Booking} from '../interfaces/booking';
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo: Apollo, private http: HttpClient) {}

  fetchBooking(variables: {code: string, lastName: string}): Observable<Booking | null> {
    return this.apollo
      .query<{ booking: Booking }>({
        query: findBookingQuery,
        variables
      })
      .pipe(
        map((result) => result.data.booking)
      )
  }

  ping() {
    return new Observable(observer => {
      const successObject = { serverPinged: true };

      const httpObserver = this.http.post(environment.graphqlApi, { responseType: 'text' })
        .subscribe(
          () => observer.next(successObject),
          err =>  err.status === 0 ? observer.error(err) : observer.next(successObject)
        );

      return {
        unsubscribe: httpObserver.unsubscribe
      }
    })
  }
}
