import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-higienizacao',
  templateUrl: './higienizacao.page.html',
  styleUrls: ['./higienizacao.page.scss'],
})
export class HigienizacaoPage{

  pesquisa: string;
   

  segmentChanged(mudar: any) {
    console.log('Mudança de categoria carregada', mudar);
    console.log('Mudança de categoria carregada', mudar.detail.value);
    if(mudar.detail.value=='videos'){
      console.log("videos");
      this.exibirvideo=true;
    }
    if(mudar.detail.value=='imagens'){
      console.log("imagens");
      this.exibirvideo=false;
    }

  }

  public exibirvideo = false;

  public user = {
    favorito:false,
  
  };

  public validarFavorito (){
    console.log("mudança");
  

   }

  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet() {
    const botao = await this.actionSheetController.create({
      header: 'Selecione a melhor opção',
      buttons: [ {
        text: 'Compartilhar',
        icon: 'share',
        role: '',
        handler: () => {
          console.log('Compartilhar');
        }
      }, {
        text: 'Favoritar',
        icon: 'heart',
        handler: () => {
          console.log('Favoritar');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar');
        }
      }]
    });
    await botao.present();
  }

 
    
   
  
}





