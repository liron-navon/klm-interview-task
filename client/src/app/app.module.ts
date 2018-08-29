import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BookingFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
