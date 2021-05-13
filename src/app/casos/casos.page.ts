import { Component , AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage-angular';
import { ApiCasosService } from '../api-casos.service';
@Component({
  selector: 'app-casos',
  templateUrl: './casos.page.html',
  styleUrls: ['./casos.page.scss'],
})
export class CasosPage implements AfterViewInit{
  
  constructor( public storage: Storage, private dataApi: ApiCasosService) { 
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
  result: {};


  ngAfterViewInit() {
     this.fetchData();
   }

  async fetchData(){

    this.result = await this.dataApi.getDataApi();

    this.storage.create();
    
    for(let i = 0; i<this.result["data"].length; i++){
      this.storage.set(`${i}`,this.result['data'][i]);
    }
     
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
      this.barChartMethod();
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

  barChartMethod() {
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
