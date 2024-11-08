import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() item = 0;

  @Output() updateDataEvent = new EventEmitter<string>();

  title = 'Send Data child to  Parent component';
}
