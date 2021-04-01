import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SliderBase } from '@mobiscroll/angular-lite/src/js/classes/slider-base';


@Component({
  selector: 'app-sintomas',
  templateUrl: './sintomas.page.html',
  styleUrls: ['./sintomas.page.scss'],
})

export class SintomasPage {
  public form = [
    
      { val: 'Febre', isChecked: false, id:'febre' },
      { val: 'Tosse', isChecked: false,  id:'tosse'},
      { val: 'Cansaço', isChecked: false,  id:'cansaco' },
      { val: 'Perda de paladar', isChecked: false,  id:'perda_paladar' },
      { val: 'Dor de cabeça', isChecked: false,  id:'dor_cabeca' },
      { val: 'Dores de garganta', isChecked: false,  id:'dor_garganta' }
    ];

    public user = {
        nome: '',
        febre:false,
        tosse:false,
        cansaco:false,
        perda_paladar:false,
        dor_cabeca:false,
        dor_garganta:false,
      
    };

    public entrada = 0;

    public botao (){
      if (this.form ){}
    }

    public validarDados (){
      let contador = 0;

      if (this.user.febre) contador ++;
      if (this.user.tosse) contador ++;
      if (this.user.cansaco) contador ++;
      if (this.user.perda_paladar) contador ++;
      if (this.user.dor_garganta) contador ++;
      if (this.user.dor_cabeca) contador ++;
      if (contador>=3)
       alert(this.user.nome + ', procure um médico ou fique em repouso afastado dos familiares');

      else
      alert(this.user.nome + ', a melhor alternativa é ficar em repouso e realizar o teste de COVID');

     }






}




