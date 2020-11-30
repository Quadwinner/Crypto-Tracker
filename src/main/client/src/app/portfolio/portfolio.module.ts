import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioComponent } from './portfolio-home/portfolio.component';
import { InputModuleModule } from '../input-module/input-module.module'
import { ButtonModuleModule } from '../button-module/button-module.module';
import { CurrencyPreviewModule } from '../currency-preview/currency-preview.module'


@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    InputModuleModule,
    ButtonModuleModule,
    CurrencyPreviewModule
  ],
  exports: [
      PortfolioComponent
  ]
})
export class PortfolioModule { }