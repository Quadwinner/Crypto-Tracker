import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPreviewHomeComponent } from './currency-preview-home/currency-preview-home.component';



@NgModule({
  declarations: [CurrencyPreviewHomeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CurrencyPreviewHomeComponent
  ]
})
export class CurrencyPreviewModule { }
