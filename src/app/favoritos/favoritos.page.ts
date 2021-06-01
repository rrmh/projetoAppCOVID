import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  arrayListIm = [];
  arrayListVideo = [];
  

  constructor(private storage: Storage) { 
    console.log("CONSTRUTOR FAVORITOS");
  }

  ngOnInit() {
    this.arrayListIm = [];
   
    console.log("INIT FAVORITOS: " + this.arrayListIm.length);
   
    this.favIm();
  }
  
  ionViewWillEnter(){
    this.arrayListIm = [];
    this.arrayListVideo= [];
    console.log("INIT FAVORITOS: " + this.arrayListVideo.length);

    console.log("will enter FAVORITOS" + this.arrayListIm.length);
    this.favIm();
    this.favVideo();

  }

  favVideo(){
    this.storage.length().then(result =>{
      console.log("Registros no banco de dados: " + result)
    });

    this.storage.forEach((value, key, index)=>{

      console.log('index: ' +index)

      if(key.match(/^favVideo/)){
        if (!this.arrayListVideo.includes(value)) { 
          console.log("Adcionando chave: " + key)

          this.arrayListVideo.push(value);

        }
      }
    })
  }

  favIm(){
    this.storage.length().then(result =>{
      console.log("Registros no banco de dados: " + result)
    });

    this.storage.forEach((value, key, index)=>{

      console.log('index: ' +index)

      if(key.match(/^favIm/)){
        if (!this.arrayListIm.includes(value)) { 
          console.log("Adcionando chave: " + key)

          this.arrayListIm.push(value);

        }
      }
    })
  }

}
