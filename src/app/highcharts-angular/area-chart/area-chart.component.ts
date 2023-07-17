import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [
      {
        name: 'John',
        data: [3, 4, 3, 5, 4, 10, 12],
        type: 'area',
        marker: {
          enabled: false
        }
      },
      {
        name: 'Jane',
        data: [1, 3, 4, 3, 3, 5, 4],
        type: 'area',
        marker: {
          enabled: false
        }
      }
    ],
    title: {
      text: 'Average fruit consumption during one week'
    },
    subtitle: {
      style: {
        position: 'absolute',
        right: '0px',
        bottom: '10px'
      }
    },
    xAxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    yAxis: {
      title: {
        text: 'Number of units'
      },
      labels: {
        formatter: function () {
          return this.value + '';
        }
      },
      min: 0
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.series.name + '</b><br/>' +
          this.x + ': ' + this.y;
      }
    },
    plotOptions: {
      area: {
        fillOpacity: 0.5
      },
    },
    credits: {
      enabled: false
    },
    legend: {
      backgroundColor: (
        Highcharts.theme && Highcharts.theme.legend?.backgroundColor) || '#FFFFFF'
    },
    colors: ['#E0B1AE', '#2947AA'],
  };
}
