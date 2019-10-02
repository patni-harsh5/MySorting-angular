import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006','2007','2008','2009','2010','2011','2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65,70,26,43,78,92,40], label: 'Series A'},
    {data: [10,20,30,40,50,60,90], label: 'Series B'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
