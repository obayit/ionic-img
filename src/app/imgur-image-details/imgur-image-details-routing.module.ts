import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImgurImageDetailsPage } from './imgur-image-details.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // dependency for MatVideoModule
import { MatVideoModule } from 'mat-video';

const routes: Routes = [
  {
    path: '',
    component: ImgurImageDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), 
    MatVideoModule
  ],
  exports: [RouterModule],
})
export class ImgurImageDetailsPageRoutingModule {}
