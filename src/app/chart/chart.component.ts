import { Component, Input, OnInit } from '@angular/core';
import { Chart } from './chart.model';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() chartData: Chart | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
