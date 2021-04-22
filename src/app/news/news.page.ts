import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, NgModule, TemplateRef } from '@angular/core';
import { AlertController } from '@ionic/angular'; // importei alertControler do pactote ionic/ angular

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage {

  constructor(  private alertCtrl: AlertController ) {}

  async mostrarAlerta(){
    const myAlert = this.alertCtrl.create({ 
  
      subHeader: 'Use Máscara',
      message: ' Fique em Casa !!!',
  
      buttons : ['ok']
    });
  
    (await myAlert).present(); 
  
  
  }

}
