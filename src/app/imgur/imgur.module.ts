import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImgurPageRoutingModule } from './imgur-routing.module';

import { ImgurPage } from './imgur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgurPageRoutingModule
  ],
  declarations: [ImgurPage],
  entryComponents: [ImgurPage]
})
export class ImgurPageModule {}
