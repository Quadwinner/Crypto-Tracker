import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseComponent } from './browse-home/browse.component';
import { InputModuleModule } from '../input-module/input-module.module'
import { ButtonModuleModule } from '../button-module/button-module.module';
import { CurrencyPreviewModule } from '../currency-preview/currency-preview.module'


@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    CommonModule,
    InputModuleModule,
    ButtonModuleModule,
    CurrencyPreviewModule
  ],
  exports: [
      BrowseComponent
  ]
})
export class BrowseModule { }