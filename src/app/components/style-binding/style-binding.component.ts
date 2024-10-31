import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-style-binding',
  standalone: true,
  imports: [],
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.css',
})
export class StyleBindingComponent {
  title = 'Style binding (dynamic Style)';
  color = 'red';
  bgColor = 'Orange';
  sizePx = '50px';

  updateColor() {
    if (this.color == 'red') {
      this.color = 'white';
      this.bgColor = 'green';
      this.sizePx = '150px';
    } else {
      this.color = 'red';
      this.bgColor = 'orange';
      this.sizePx = '50px';
    }
  }
}
