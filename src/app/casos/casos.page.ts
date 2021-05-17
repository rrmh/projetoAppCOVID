import { Component , OnInit, ElementRef, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage-angular';
import { ApiCasosService } from '../api-casos.service';
@Component({
  selector: 'app-casos',
  templateUrl: './casos.page.html',
  styleUrls: ['./casos.page.scss'],
})
export class CasosPage implements OnInit{
  
  constructor( public storage: Storage, public dataApi: ApiCasosService) { 
    
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


  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.makeCall(this.fetchData);
  }

  async makeCall(callback){
    if((await this.storage.length()).valueOf() > 10){
      callback(this.storage,this.casosArrayList,this.labelsUf,this.casosArray,this.casosArray100,this.obitosArray);
    }else{
      this.result = await this.dataApi.getDataApi();
      for(let i = 0; i<this.result["data"].length; i++){
        this.storage.set(this.result['data'][i].uf,this.result['data'][i]);
      }
      
      callback(this.storage,this.casosArrayList,this.labelsUf,this.casosArray,this.casosArray100,this.obitosArray);
    }
  }

  fetchData(hd, cal, lu,ca, ca100, oa){
    
    
    hd.forEach((x) => {
      if(x.uf){
        cal.push(x);
        lu.push(x.uf);
        ca.push(x.cases);
        ca100.push(x.cases/100);
        oa.push(x.deaths);
      } 
    })
    cal.push({uf:'Casos/Óbitos graph'});
    
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
