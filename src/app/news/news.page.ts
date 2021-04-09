import { Component } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})

export class NewsPage {
  public form = [
    
      { val: 'Febre', isChecked: false },
      { val: 'Tosse', isChecked: false },
      { val: 'Cansaço', isChecked: false },
      { val: 'Perda de paladar', isChecked: false },
      { val: 'Dor de cabeça', isChecked: false },
      { val: 'Dores de garganta', isChecked: false }
    ];

}




