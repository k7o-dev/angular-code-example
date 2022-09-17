import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormSampleComponent } from './reactive-form-sample.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormSampleRoutingModule } from './reactive-form-sample-routing.module';



@NgModule({
  declarations: [
    ReactiveFormSampleComponent
  ],
  exports: [
    ReactiveFormSampleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormSampleRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormSampleModule { }
