import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterHomeComponent } from './register-home/register-home.component';
import { InputModuleModule } from '../input-module/input-module.module'
import { ButtonModuleModule } from '../button-module/button-module.module';


@NgModule({
  declarations: [
    RegisterHomeComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    InputModuleModule,
    ButtonModuleModule
  ]
})
export class RegisterModule { }
