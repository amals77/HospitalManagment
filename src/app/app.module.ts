import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule } from 'ngx-toastr';
import { HomePageComponent } from './home-page/home-page.component';
import {SharedModule} from './shared/shared.module';
import { BookingComponent } from './booking/booking.component'
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
