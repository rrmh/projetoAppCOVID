import { Component , AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.page.html',
  styleUrls: ['./casos.page.scss'],
})
export class CasosPage implements AfterViewInit{
  
  constructor(public httpClient: HttpClient, public storage: Storage) { 
  }
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  barChart: any;
  casos : any;
  labelsUf = [];
  casosArray = [];
  casosArray100 = [];
  casosArrayList = [];
  obitosArray = [];
  term: string;


  ngAfterViewInit() {
     this.fetchData();
   }

  fetchData(){
    this.storage.create();
    this.httpClient.get('https://covid19-brazil-api.now.sh/api/report/v1').subscribe(res => {
      
      for(let i = 0; i<res["data"].length; i++){
        this.storage.set(`${i}`,res['data'][i]);
      }
    });
    
    this.storage.forEach((x) => {
      if(x.uf){
        this.casosArrayList.push(x);
        this.labelsUf.push(x.uf);
        this.casosArray.push(x.cases);
        this.casosArray100.push(x.cases/100);
        this.obitosArray.push(x.deaths);
      } 
    }) 
    if(this.labelsUf){
      this.barChartMethod2();
    } 
  }

  toggleSection(items) {
    
    for(let i = 0; i<this.casosArrayList.length; i++){
      if(items == this.casosArrayList[i]){
        this.casosArrayList[i].open = !this.casosArrayList[i].open;
        return;
      }
    }
  }

  barChartMethod2() {
    console.log('this.labelsUf.length')
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
        data: this.casosArray100,
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
