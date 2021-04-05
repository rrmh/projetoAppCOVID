import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-higienizacao',
  templateUrl: './higienizacao.page.html',
  styleUrls: ['./higienizacao.page.scss'],
})
export class HigienizacaoPage{
  segmentChanged(mudar: any) {
    console.log('Mudança de categoria carregada', mudar);
  }
  
}


