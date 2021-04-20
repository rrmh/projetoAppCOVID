import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

  export class AppComponent implements OnInit {
    navigate : any;
    
    constructor(private platform : Platform,private splashScreen: SplashScreen,
      private statusBar: StatusBar) 
    {
      this.initializeApp();
      this.sideMenu();
    }

    initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }
    ngOnInit() {}
    sideMenu()
    {
      this.navigate =
      [

        {
          title : "Home",
          url   : "/home",
          icon  : "home"
        },
        {
          title : "News",
          url   : "/news",
          icon  : "newspaper"
        },
        {
          title : "Casos",
          url   : "/casos",
          icon  : "skull"
        },
        {
          title : "Higienização",
          url   : "/higienizacao",
          icon  : "hand-left"
        },
        {
          title : "Sintomas",
          url   : "/sintomas",
          icon  : "body"
        },
        {
          title : "Vacinação",
          url   : "/vacinacao",
          icon  : "flask"
        },


      ]
    }
  }

