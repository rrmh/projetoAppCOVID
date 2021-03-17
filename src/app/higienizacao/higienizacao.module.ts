import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HigienizacaoPageRoutingModule } from './higienizacao-routing.module';

import { HigienizacaoPage } from './higienizacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HigienizacaoPageRoutingModule
  ],
  declarations: [HigienizacaoPage]
})
export class HigienizacaoPageModule {}
