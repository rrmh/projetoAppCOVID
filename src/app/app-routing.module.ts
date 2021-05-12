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
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
