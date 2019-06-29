import { Component, OnInit } from '@angular/core';
import { Tracker } from '../model/tracker';

@Component({
  selector: 'app-count-tracker',
  templateUrl: './count-tracker.component.html',
  styleUrls: ['./count-tracker.component.scss']
})
export class CountTrackerComponent implements OnInit {

  trackers: Tracker[] = [{title: 'tracker1', counter: 0}];

  constructor() { }

  ngOnInit() {
  }

  AddTracker() {
    const current_size = this.trackers.length;
    const new_tracker = {title: `tracker${current_size + 1}`, counter: 0};

    this.trackers.push(new_tracker);
  }

  AddOne(index: number) {
    this.trackers[index].counter++;
  }

  MinusOne(index: number) {
    this.trackers[index].counter--;
  }

}
