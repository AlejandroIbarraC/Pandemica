import {Component, Input, NgModule, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { patients as data } from 'src/assets/data';

@Component({
  selector: 'app-patients-chart',
  templateUrl: './patients-chart.component.html',
  styleUrls: ['./patients-chart.component.scss']
})
export class PatientsChartComponent implements OnInit {

  data: any[];

  @Input() view: any[] = [600, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'location';
  showYAxisLabel = false;
  yAxisLabel = 'population';

  colorScheme = {
    domain: ['#43C59E', '#80CED7', '#43C59E', '#80CED7']
  };

  constructor() {
    Object.assign(this, { data });
  }

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
  }
}