import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoolTutorialPage } from './cool-tutorial.page';

const routes: Routes = [
  {
    path: '',
    component: CoolTutorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoolTutorialPageRoutingModule {}
