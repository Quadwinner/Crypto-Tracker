import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeModule } from './home/home.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { CurrencyPreviewModule } from './currency-preview/currency-preview.module';
import { CurrencyDetailsModule } from './currency-details/currency-details.module';
import { PlotModule } from './plot/plot.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterModule,
    LoginModule,
    HomeModule,
    CurrenciesModule,
    HttpClientModule,
    CurrencyPreviewModule,
    CurrencyDetailsModule,
    PlotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
