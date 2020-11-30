import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginHomeComponent } from './login-home/login-home.component';
import { InputModuleModule } from '../input-module/input-module.module';
import { ButtonModuleModule } from '../button-module/button-module.module';


@NgModule({
  declarations: [LoginHomeComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    InputModuleModule,
    ButtonModuleModule
  ]
})
export class LoginModule { }
