import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  arrayListIm = [];

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.favIm();
  }

  favIm(){
    
    this.storage.forEach((x)=>{
      console.log(/^favIm/.test('favIm2'))
      if(x.key.match(/^favIm/)){
        console.log(x.key)
        console.log('test')
        this.arrayListIm.push(x);
      }
    })
  }

}
