interface ContactDetail {
  class?: string;
  address?: string;
}

interface Country {
  code?: string;
  name?: string;
}

interface City {
  IATACode?: string;
  name?: string;
  country?: Country;
}

interface Origin {
  IATACode?: string;
  name?: string;
  city?: City;
}

interface Country2 {
  code?: string;
  name?: string;
}

interface Destination {
  IATACode?: string;
  name?: string;
  city?: City;
}

interface Country3 {
  code?: string;
  name?: string;
}

interface DepartFrom {
  IATACode?: string;
  name?: string;
  city?: City;
}

interface Country4 {
  code?: string;
  name?: string;
}

interface ArriveOn {
  IATACode?: string;
  name?: string;
  city?: City;
}

interface Carrier {
  code?: string;
  name?: string;
}

interface Status {
  code?: string;
  name?: string;
}

interface SellingClass {
  code?: string;
}

interface Carrier2 {
  code?: string;
  name?: string;
}

interface ArrivalTerminal {
  name?: string;
}

interface Cabin {
  code?: string;
  name?: string;
}

interface Equipment {
  code?: string;
  name?: string;
}

interface OperatingFlight {
  number?: string;
  carrier?: Carrier2;
  duration?: string;
  flown?: boolean;
  checkInStart?: string;
  localCheckInStart?: string;
  checkInEnd?: string;
  localCheckInEnd?: string;
  scheduledArrival?: string;
  localScheduledArrival?: string;
  scheduledDeparture?: string;
  localScheduledDeparture?: string;
  arrivalTerminal?: ArrivalTerminal;
  cabin?: Cabin;
  equipment?: Equipment;
}

interface MarketingFlight {
  number?: string;
  carrier?: Carrier;
  status?: Status;
  numberOfStops?: number;
  sellingClass?: SellingClass;
  operatingFlight?: OperatingFlight;
}

interface Segment {
  id?: number;
  type?: string;
  informational?: boolean;
  departFrom?: DepartFrom;
  arriveOn?: ArriveOn;
  marketingFlight?: MarketingFlight;
}

interface Connection {
  id?: number;
  duration?: string;
  origin?: Origin;
  destination?: Destination;
  segments?: Segment[];
}

interface Itinerary {
  type?: string;
  connections?: Connection[];
}

interface Title {
  code?: string;
  name?: string;
}

interface Passenger {
  id?: number;
  firstName?: string;
  lastName?: string;
  title?: Title;
}

export interface Booking {
  bookingCode?: string;
  contactDetails?: ContactDetail[];
  itinerary?: Itinerary;
  passenger?: Passenger;
}
