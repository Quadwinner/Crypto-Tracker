import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrenciesRoutingModule } from './currencies-routing.module';
import { CurrenciesHomeComponent } from './currencies-home/currencies-home.component';
import { BrowseModule } from '../browse/browse.module';
import { CurrencyDetailsModule } from '../currency-details/currency-details.module';

@NgModule({
  declarations: [CurrenciesHomeComponent],
  imports: [
    CommonModule,
    CurrenciesRoutingModule,
    BrowseModule,
    CurrencyDetailsModule
  ]
})
export class CurrenciesModule { }