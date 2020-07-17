import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImgurFlexPageRoutingModule } from './imgur-flex-routing.module';

import { ImgurFlexPage } from './imgur-flex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgurFlexPageRoutingModule
  ],
  declarations: [ImgurFlexPage]
})
export class ImgurFlexPageModule {}
