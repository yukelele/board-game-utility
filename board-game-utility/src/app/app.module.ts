import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountTrackerComponent } from './count-tracker/count-tracker.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CountTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
