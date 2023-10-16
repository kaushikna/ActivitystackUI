import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmissonFormComponent } from './submisson-form/submisson-form.component';

const routes: Routes = [
  {path:"",component:SubmissonFormComponent,pathMatch:"full"},
  {path:"Submisson",component:SubmissonFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
