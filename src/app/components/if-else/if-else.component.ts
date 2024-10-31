import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css',
})
export class IfElseComponent {
  title = '*ngIf (If-Else) ';
  show = false;
  

  setBool() {
    if (this.show == true) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
