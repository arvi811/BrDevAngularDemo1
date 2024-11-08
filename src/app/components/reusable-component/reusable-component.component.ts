import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable-component',
  standalone: true,
  imports: [],
  templateUrl: './reusable-component.component.html',
  styleUrl: './reusable-component.component.css',
})
export class ReusableComponentComponent implements OnInit {
  title = 'Reusable Component';

  @Input() item: { 
    name: string; 
    email: string } =
     {
       name: '', email: '' 
      };

  ngOnInit(): void {
    console.log('test');
  }
}
