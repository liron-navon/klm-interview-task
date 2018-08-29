import { Component } from '@angular/core';
import {GraphqlService} from "./services/graphql.service";
import {Booking} from './interfaces/booking';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private api: GraphqlService) {}

  findBooking(formData: {code: string, lastName: string}) {
    this.api.findBooking(formData)
      .subscribe((data: Booking) =>  {
        const firstConnection = data.itinerary.connections[0];
        const originAirport = firstConnection.origin.name;
        const destinationAirport = firstConnection.destination.name;
        const titleName = data.passenger.title.name;
        const lastName = data.passenger.lastName;
        const duration = Math.round(+firstConnection.duration / 60);
        const hoursPluralised = duration === 1 ? 'hour': 'hours';

        alert(`Hello ${titleName} ${lastName}, your flight from ${originAirport} to ${destinationAirport} will take about ${duration} ${hoursPluralised}`)
      })
  }

}
