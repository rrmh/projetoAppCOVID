import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HigienizacaoPage } from './higienizacao.page';

const routes: Routes = [
  {
    path: '',
    component: HigienizacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HigienizacaoPageRoutingModule {}
