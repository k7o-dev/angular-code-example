import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./top/top.module').then(m => m.TopModule)
  },
  {
    path: 'reactive-form-sample',
    loadChildren: () => import('./reactive-form-sample/reactive-form-sample.module').then(m => m.ReactiveFormSampleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
