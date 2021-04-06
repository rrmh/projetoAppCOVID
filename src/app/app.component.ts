
import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})



  export class AppComponent {
    navigate : any;
    constructor(private platform    : Platform,)
    {
      this.sideMenu();
      this.initializeApp();
    }

    initializeApp() {
      this.platform.ready().then(() => {
      });
    }

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
          title : "Cadastro",
          url   : "/cadastro",
          icon  : "create"
        },
        {
          title : "Login",
          url   : "/login",
          icon  : "log-in"
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

