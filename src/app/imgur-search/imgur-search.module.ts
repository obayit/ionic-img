import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImgurSearchPageRoutingModule } from './imgur-search-routing.module';

import { ImgurSearchPage } from './imgur-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgurSearchPageRoutingModule
  ],
  declarations: [ImgurSearchPage]
})
export class ImgurSearchPageModule {}
