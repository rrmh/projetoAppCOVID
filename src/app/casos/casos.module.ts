import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular-lite';
import { IonicModule } from '@ionic/angular';

import { CasosPageRoutingModule } from './casos-routing.module';

import { CasosPage } from './casos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosPageRoutingModule,
    MbscModule
  ],
  declarations: [CasosPage]
})
export class CasosPageModule {}
