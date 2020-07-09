import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImgurImageDetailsPageRoutingModule } from './imgur-image-details-routing.module';

import { ImgurImageDetailsPage } from './imgur-image-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgurImageDetailsPageRoutingModule
  ],
  declarations: [ImgurImageDetailsPage]
})
export class ImgurImageDetailsPageModule {}
