import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountTrackerComponent } from './count-tracker.component';

describe('CountTrackerComponent', () => {
  let component: CountTrackerComponent;
  let fixture: ComponentFixture<CountTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
