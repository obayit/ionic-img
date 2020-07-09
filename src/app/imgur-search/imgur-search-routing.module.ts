import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImgurSearchPage } from './imgur-search.page';

const routes: Routes = [
  {
    path: '',
    component: ImgurSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImgurSearchPageRoutingModule {}
