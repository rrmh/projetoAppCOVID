import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'higienizacao',
    loadChildren: () => import('./higienizacao/higienizacao.module').then( m => m.HigienizacaoPageModule)
  },
  {
    path: 'sintomas',
    loadChildren: () => import('./sintomas/sintomas.module').then( m => m.SintomasPageModule)
  },
  {
    path: 'casos',
    loadChildren: () => import('./casos/casos.module').then( m => m.CasosPageModule)
  },
  {
    path: 'vacinacao',
    loadChildren: () => import('./vacinacao/vacinacao.module').then( m => m.VacinacaoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
