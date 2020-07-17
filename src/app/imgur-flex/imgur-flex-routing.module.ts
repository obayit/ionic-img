import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImgurFlexPage } from './imgur-flex.page';

const routes: Routes = [
  {
    path: '',
    component: ImgurFlexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImgurFlexPageRoutingModule {}
