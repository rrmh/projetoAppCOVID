import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CasosPageRoutingModule } from './casos-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CasosPage } from './casos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [CasosPage]
})
export class CasosPageModule {}
