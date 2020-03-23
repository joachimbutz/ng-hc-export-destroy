import {Component, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }

  chartExists = false;
  chart: Chart;

  private chartOptions: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: true
    },
    series: [{
      type: 'line',
      name: 'Line 1',
      data: [1, 2, 3]
    }]
  };

  ngOnInit(): void {
    this.createChart();
  }

  destroyOrCreate() {
    if (this.chartExists) {
      this.destroyChart();
    } else {
      this.createChart();
    }
  }

  private destroyChart() {
    this.chart.destroy();
    this.chartExists = false;
  }

  private createChart() {
    this.chart = new Chart(this.chartOptions);
    this.chartExists = true;
  }

  destroyOrCreateLabel() {
    if (this.chartExists) {
      return 'Destroy';
    }
    return 'Create';
  }
}
