import { Component , AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.page.html',
  styleUrls: ['./casos.page.scss'],
})
export class CasosPage implements AfterViewInit{
  
  constructor(public httpClient: HttpClient) { 
  }
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  barChart: any;
  casos : any;
  obj : any;
  automaticClose = false;
  labelsUf = [];
  casosArray = [];
  casosArray2 = [];
  casosArray3 = [];
  obitosArray = [];

  ngAfterViewInit() {
    this.fetchDataChart();
    this.barChartMethod2();
    this.barChart.update();
    this.searchState();
    console.log(this.casosArray3);
  }

  searchState(){
    this.httpClient.get('https://covid19-brazil-api.now.sh/api/report/v1').subscribe(res => {
      for(let i = 0; i<res["data"].length; i++){
        this.casosArray3.push(res['data'][i]);
      }
    });
  }
  toggleSection(index) {
    this.casosArray3[index].open = !this.casosArray3[index].open;

    if (this.automaticClose && this.casosArray3[index].open) {
      this.casosArray3
      .filter((item, itemIndex) => itemIndex != index)
      .map(item => item.open = false);
    }
  }

   fetchDataChart(){
    var self = this;
    let promise = new Promise((resolve, reject) => {
        this.httpClient.get('https://covid19-brazil-api.now.sh/api/report/v1')
        .toPromise()
        .then((res : any) =>{
        this.casos = res;
        for(let i = 0; i<this.casos["data"].length; i++){
          this.labelsUf.push(this.casos["data"][i].uf);
          this.casosArray.push(this.casos["data"][i].cases);
          this.casosArray2.push(this.casos["data"][i].cases/100);
          this.obitosArray.push(this.casos["data"][i].deaths);
        };
        this.casos = res['data'];
      })
    });

  }
  barChartMethod2() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.labelsUf,
        datasets: [{
          label: '# de obitos',
          data: this.obitosArray,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderWidth: 1.5,
          hoverBackgroundColor: "rgba(232,105,90,0.8)",
          hoverBorderColor: "rgba(232,105,90,0.8)",
          borderColor: "rgba(232,105,90,0.8)",
          scaleStepWidth: 1,
        },{
        label: '# de casos / 100',
        data: this.casosArray2,
        backgroundColor: 'rgba(0, 99, 132, 0.2)',
          borderWidth: 1.5,
          hoverBackgroundColor: "rgba(0,105,90,0.8)",
          hoverBorderColor: "rgba(0,105,90,0.8)",
          borderColor: "rgba(0,105,90,0.8)",
          scaleStepWidth: 1,
      }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
