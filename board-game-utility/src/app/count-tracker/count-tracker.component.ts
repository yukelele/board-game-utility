import { Component, OnInit } from '@angular/core';
import { Tracker } from '../model/tracker';

@Component({
  selector: 'app-count-tracker',
  templateUrl: './count-tracker.component.html',
  styleUrls: ['./count-tracker.component.scss']
})
export class CountTrackerComponent implements OnInit {

  trackers: Tracker[] = [{title: 'tracker', counter: 0}];

  isOnlyOneTracker = true;

  constructor() {}

  ngOnInit() {}

  AddTracker(): void {
    const new_tracker = {title: 'tracker', counter: 0};

    this.trackers.push(new_tracker);

    this.isOnlyOneTracker = this.trackers.length == 1 ? true : false;
  }

  DeleteTracker(index: number): void {
    this.trackers.splice(index, 1);

    this.isOnlyOneTracker = this.trackers.length == 1 ? true : false;
  }

  AddOne(index: number): void {
    this.trackers[index].counter++;
  }

  MinusOne(index: number): void {
    this.trackers[index].counter--;
  }

}
