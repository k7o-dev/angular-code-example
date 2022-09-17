import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormSampleComponent } from './reactive-form-sample.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ReactiveFormSampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormSampleRoutingModule { }
