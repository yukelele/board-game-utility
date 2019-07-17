import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountTrackerComponent } from './count-tracker/count-tracker.component';

const routes: Routes = [
  { path: 'count-tracker', component: CountTrackerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
