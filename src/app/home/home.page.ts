import{ Component } from '@angular/core';
import{AlertController, NavController} from '@ionic/angular';
import { CasosPage } from '../casos/casos.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private AlertCtrl: AlertController,
    public navCtrl: NavController

  ) {}

 async showAlert (){
   const myalert= await this.AlertCtrl.create({


header:'DISK AGLOMERAÇÃO',
subHeader:' 181 ',


buttons: [
  {
text: 'OK',
handler: ()=> {console.log("CLICOU EM OK")}

  },

{

  text: 'CANCELAR',
handler: ()=> {console.log("CLICOU EM CANCELAR")}
},
]
   });

   myalert.present ();

 }

 pushPage(a){
  this.navCtrl.navigateForward(a);
}
  myAction (){

    console.log('my action');
  }

};
