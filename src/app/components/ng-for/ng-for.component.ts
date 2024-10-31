import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css',
})
export class NgForComponent {
  title = '*ngFor';
  users = ['John', 'Doe', 'Mark'];
  userDetails = [
    { name: 'John', gender: 'Male', number: '0328403' },
    { name: 'Doe', gender: 'Female', number: '5618412' },
    { name: 'Mark', gender: 'Male', number: '5142131' },
  ];
}
