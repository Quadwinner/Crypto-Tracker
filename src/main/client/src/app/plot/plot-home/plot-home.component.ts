import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plot-home',
  templateUrl: './plot-home.component.html',
  styleUrls: ['./plot-home.component.css']
})
export class PlotHomeComponent implements OnInit {
  @Input() title = "";
  @Input() xArray = [];
  @Input() yArray = [];

  constructor() { }

  data = null;
  layout = null;
  graph = {
    data: null,
    layout: null
  };

  ngOnInit(): void {
    this.data = [{ x: this.xArray, y: this.yArray, type: 'scatter', mode: 'lines+points', marker: {color: 'indigo'} }];
    this.layout = {title: this.title, yaxis: {tickformat: '$'}};
  }

}
