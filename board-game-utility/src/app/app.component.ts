import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('myTopnav') myTopnav: ElementRef;

  constructor() {}

  ngOnInit() {    
  }

  myFunction() {
    let x = this.myTopnav;

    if (x.nativeElement.classList.contains('responsive')) {
      x.nativeElement.classList.remove('responsive');
    } else {
      x.nativeElement.classList.add('responsive');
    }
  }
  
}
