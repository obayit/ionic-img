import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImgurImageDetailsPage } from './imgur-image-details.page';

const routes: Routes = [
  {
    path: '',
    component: ImgurImageDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImgurImageDetailsPageRoutingModule {}
