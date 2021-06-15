import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Theme, ThemeEmitterService } from 'theme-emitter';
import { Chart } from './chart/chart.model';

// Manage these in a constant file
export const CHART_TYPE = 'pie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Theme Emitter Demo';
  theme!: Theme;
  chartData!: Chart;
  enableLightTheme: boolean;

  constructor(
    private themeEmitterService: ThemeEmitterService
  ) {
    this.enableLightTheme = true;
  }

  public ngOnInit(): void {
    this.initTheme();
  }

  private initTheme(): void {
    this.themeEmitterService.getTheme$().subscribe(
      theme => {
        this.theme = theme;
        this.chartData = this.initChart();
      }, err => {
        console.log('Error occurred while loading theme details');
      });
  }

  private initChart(): Chart {
    const type = CHART_TYPE as ChartType;
    const size = {
      width: 300,
      height: 300
    };
    const colors = [
      {
        backgroundColor: [
          this.theme?.primaryColor,
          this.theme?.accentColor
        ],
        borderWidth: 0
      }
    ];
    const options = {
      tooltips: {
        enabled: false
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: false
    };

    // real values to be passed here
    const data = [70, 30];

    return new Chart(type, colors, size, options, data);
  }

}
