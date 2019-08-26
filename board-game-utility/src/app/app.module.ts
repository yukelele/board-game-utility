import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountTrackerComponent } from './count-tracker/count-tracker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CountTrackerComponent,
    DiceRollerComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
