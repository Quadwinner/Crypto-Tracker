import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotHomeComponent } from './plot-home/plot-home.component';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [PlotHomeComponent],
  imports: [
    CommonModule,
    PlotlyModule
  ],
  exports: [
    PlotHomeComponent
  ]
})
export class PlotModule { }
