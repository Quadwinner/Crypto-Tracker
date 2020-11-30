import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrenciesHomeComponent } from './currencies-home/currencies-home.component';

const routes: Routes = [
  {
    path: 'currencies', component: CurrenciesHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrenciesRoutingModule { }