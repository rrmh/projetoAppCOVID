import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FavoritosPageRoutingModule } from './favoritos-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FavoritosPage } from './favoritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    FavoritosPageRoutingModule
    
  ],
  declarations: [FavoritosPage]
})
export class FavoritosPageModule {}
