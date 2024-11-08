import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, FormGroup, ReactiveFormsModule, NgModule, NgForm],
})
export class AppModule {}
