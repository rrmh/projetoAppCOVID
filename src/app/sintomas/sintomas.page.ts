import { Component } from '@angular/core';


@Component({
  selector: 'app-sintomas',
  templateUrl: './sintomas.page.html',
  styleUrls: ['./sintomas.page.scss'],
})

export class SintomasPage {
  public form = [
      { val: 'Febre', isChecked: false },
      { val: 'Tosse', isChecked: false },
      { val: 'Cansaço', isChecked: false },
      { val: 'Perda de paladar', isChecked: false },
      { val: 'Dor de cabeça', isChecked: false },
      { val: 'Dores de garganta', isChecked: false }
    ];

    public entrada = 0;





}




