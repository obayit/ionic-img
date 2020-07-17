import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssTutorialPage } from './css-tutorial.page';

const routes: Routes = [
  {
    path: '',
    component: CssTutorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssTutorialPageRoutingModule {}
