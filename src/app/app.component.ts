import { Component  } from '@angular/core';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DataBindingComponent,
    MakeFunctionComponent,
    EventsComponent,
    PropertyBindingComponent,
    IfElseComponent,
    SwitchComponent,
    NgForComponent,
    StyleBindingComponent,
    ChildComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
  title = 'Training';
  data = 50;
  
//test
  //for Passing Data on Child component test git commit test
  updateData() {
    this.data = Math.floor(Math.random() * 100);
  }

  test(){
     console.log('test');
  }
}
