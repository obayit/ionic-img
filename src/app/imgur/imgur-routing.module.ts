import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImgurPage } from './imgur.page';

const routes: Routes = [
  {
    path: '',
    component: ImgurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImgurPageRoutingModule {}
