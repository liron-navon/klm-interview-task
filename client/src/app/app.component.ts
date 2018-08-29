import { Component } from '@angular/core';
import {GraphqlService} from "./services/graphql.service";
import {Booking} from './interfaces/booking';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message = '';

  constructor(private api: GraphqlService) {}

  findBooking(formData: {code: string, lastName: string}) {
    this.api.findBooking(formData)
      .subscribe((data: Booking | null) =>  {
        if (data) {
          this.message = AppComponent.createBookingMessage(data)
        } else {
          this.message = 'Sorry, couldn\'t find your booking';
        }
      })
  }

  static createBookingMessage(data: Booking): string {
    const firstConnection = data.itinerary.connections[0];
    const originAirport = firstConnection.origin.name;
    const destinationAirport = firstConnection.destination.name;
    const titleName = data.passenger.title.name;
    const lastName = data.passenger.lastName;
    const duration = Math.round(+firstConnection.duration / 60);
    const hoursPluralised = duration === 1 ? 'hour': 'hours';
    return `Hello ${titleName} ${lastName}, your flight from ${originAirport} to ${destinationAirport} will take about ${duration} ${hoursPluralised}`;
  }

}
