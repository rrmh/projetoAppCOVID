import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-higienizacao',
  templateUrl: './higienizacao.page.html',
  styleUrls: ['./higienizacao.page.scss'],
})

export class HigienizacaoPage{
 public contador_favoritos= 0;
  pesquisa: string;
  arrayList = [{}];

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
   
   favorito = document.querySelector

  constructor(public actionSheetController: ActionSheetController,  private storage: Storage) {
    this.arrayList = [{label:'Lavar as Mãos',
    url:'https://www.jau.sp.gov.br/uploads/noticias/2020/04/08/195840/covid-preven%C3%A7%C3%A3o.jpg.jpg'
    },
    {label:'Higienizar as mãos',
      url:'https://www.laurodefreitas.ba.gov.br/imagens/img_user/1582977967290220jpg'
    },
    {label:'5 medidas para se proteger do COVID',
    url:'https://www.princesa.pb.gov.br/storage/content/noticias/geral/3644/destaque/img_202005281518ftTn.jpeg'
    }]
  }
  async presentActionSheet(item) {
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
          console.log(item);
          this.contador_favoritos++;
          console.log('Favoritar ' + this.contador_favoritos);
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





