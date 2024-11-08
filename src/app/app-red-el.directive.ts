import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppRedEl]',
  standalone: true,
})
export class AppRedElDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'blue';
  }
}
