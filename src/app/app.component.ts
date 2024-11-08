import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { MakeFunctionComponent } from './components/make-function/make-function.component';
import { EventsComponent } from './components/events/events.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { IfElseComponent } from './components/if-else/if-else.component';
import { SwitchComponent } from './components/switch/switch.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { ChildComponent } from './components/child/child.component';
import { ReusableComponentComponent } from './components/reusable-component/reusable-component.component';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormGroupName,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { AppModule } from './app/app.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRedElDirective } from './app-red-el.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppRedElDirective,
    CommonModule,
    ReactiveFormsModule,
    UsdInrPipe,
    FormsModule,
    CommonModule,
    RouterOutlet,
    DataBindingComponent,
    MakeFunctionComponent,
    EventsComponent,
    PropertyBindingComponent,
    IfElseComponent,
    SwitchComponent,
    NgForComponent,
    StyleBindingComponent,
    ChildComponent,
    ReusableComponentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //Reactive form

  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  //end

  title = 'Training';
  data: any = 50;
  twoWayBindingData: any;

  userList = [
    { name: 'Alvin', email: 'alvin@test.com' },
    { name: 'Joep', email: 'joep@test.com' },
    { name: 'Laurence', email: 'laurence@test.com' },
    { name: 'arvi', email: 'arvi@test.com' },
  ];

  //for Passing Data on Child component test git commit test
  updateData() {
    this.data = Math.floor(Math.random() * 100);
  }
  updateData2(item: any) {
    this.data = item;
  }

  getVal(data: any) {
    alert(data);
  }

  loginUser(item: any) {
    console.log(item);
  }
}
