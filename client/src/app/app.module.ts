import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApolloBoostModule, ApolloBoost } from 'apollo-angular-boost';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';
import { OnServerReadyComponent } from './components/on-server-ready/on-server-ready.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BookingFormComponent,
    OnServerReadyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpLinkModule,
    HttpClientModule,
    ApolloBoostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: ApolloBoost) {
    apollo.create({ uri: environment.graphqlApi });
  }
}
