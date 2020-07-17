import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'imgur',
    loadChildren: () => import('./imgur/imgur.module').then( m => m.ImgurPageModule)
  },
  {
    path: '',
    redirectTo: 'imgur-search',
    pathMatch: 'full'
  },
  {
    path: 'imgur-image-details',
    loadChildren: () => import('./imgur-image-details/imgur-image-details.module').then( m => m.ImgurImageDetailsPageModule)
  },
  {
    path: 'cool-tutorial',
    loadChildren: () => import('./cool-tutorial/cool-tutorial.module').then( m => m.CoolTutorialPageModule)
  },
  {
    path: 'imgur-search',
    loadChildren: () => import('./imgur-search/imgur-search.module').then( m => m.ImgurSearchPageModule)
  },
  {
    path: 'css-tutorial',
    loadChildren: () => import('./css-tutorial/css-tutorial.module').then( m => m.CssTutorialPageModule)
  },
  {
    path: 'imgur-flex',
    loadChildren: () => import('./imgur-flex/imgur-flex.module').then( m => m.ImgurFlexPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
