import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Key } from 'selenium-webdriver';

@Component({
  selector: 'app-higienizacao',
  templateUrl: './higienizacao.page.html',
  styleUrls: ['./higienizacao.page.scss'],
})

export class HigienizacaoPage{
 public contador_favoritos= 0;
  pesquisa: string;
  arrayList = [{}];
  arrayVideos = [{}];
  

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
   

  constructor(public actionSheetController: ActionSheetController,  public storage: Storage) {
    this.arrayList = [{
    label:'Lavar as Mãos',
    key:'favIm1',
    url:'https://www.jau.sp.gov.br/uploads/noticias/2020/04/08/195840/covid-preven%C3%A7%C3%A3o.jpg.jpg'
    },
    {
    label:'Higienizar as mãos',
    key:'favIm2',
   url:'https://www.laurodefreitas.ba.gov.br/imagens/img_user/1582977967290220jpg'
    },
    {
    label:'5 medidas para se proteger do COVID',
    key:'favIm3',
    url:'https://www.princesa.pb.gov.br/storage/content/noticias/geral/3644/destaque/img_202005281518ftTn.jpeg'
    }]

    
  this.arrayVideos = [
    {
    label: 'Higienizando a mão com água e sabão',
    key: 'favVideo1',
    url: 'https://s2.glbimg.com/uLRkPHa7Wy5form94a2q8nVq4AE=/620x480/e.glbimg.com/og/ed/f/original/2018/10/08/agua-e-sabao.jpg'
  },
  {
    label: 'Palavras de especialista',
    key: 'favVideo2',
    url: 'https://s2.glbimg.com/uLRkPHa7Wy5form94a2q8nVq4AE=/620x480/e.glbimg.com/og/ed/f/original/2018/10/08/agua-e-sabao.jpg'
  },
  {
    label: 'Diferença entre exames RT-PCR e sorologia',
    key: 'favVideo3',
    url: 'https://s2.glbimg.com/uLRkPHa7Wy5form94a2q8nVq4AE=/620x480/e.glbimg.com/og/ed/f/original/2018/10/08/agua-e-sabao.jpg'
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
         
          this.storage.remove(item.key)
          this.storage.set(item.key,item);
          console.log("Adicionando dados. Chave: "+ item.key + " valor: " + JSON.stringify(item) )
          this.contador_favoritos++;
          this.storage.length().then(result =>{
            console.log("Registros no banco de dados: " + result)
          });
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

