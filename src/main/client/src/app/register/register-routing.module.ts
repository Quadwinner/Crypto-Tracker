import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterHomeComponent } from './register-home/register-home.component';

const routes: Routes = [
  {
    path: 'register', component: RegisterHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
