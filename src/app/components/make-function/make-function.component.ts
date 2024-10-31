import { Component } from '@angular/core';

@Component({
  selector: 'app-make-function',
  standalone: true,
  imports: [],
  templateUrl: './make-function.component.html',
  styleUrl: './make-function.component.css',
})
export class MakeFunctionComponent {
  firstName = 'John';
  lastName = 'Santos';
  name = '';

  testNoParam() {
    alert('Hello world!');
  }

  testParams(data: string) {
    alert(data);
  }

  getInputValue(val: string) {
    this.name = val;
  }

  showName() {
    alert(this.name);
  }
}
