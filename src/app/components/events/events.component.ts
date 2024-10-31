import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  myData1 = '';
  myData2 = '';
  myData3 = '';
  getData1(val: string) {
    this.myData1 = val;
  }
  getData2(val: string) {
    this.myData2 = val;
  }
  getData3(val: string) {
    this.myData3 = val;
  }
}
