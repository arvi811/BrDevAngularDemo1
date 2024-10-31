import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css',
})
export class SwitchComponent {
  title = 'ngSwitch';
  color = 'blue';

  turnGreen() {
    this.color = 'green';
  }
  turnBlue() {
    this.color = 'blue';
  }
  turnRed() {
    this.color = 'red';
  }
}
