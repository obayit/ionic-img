import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssTutorialPageRoutingModule } from './css-tutorial-routing.module';

import { CssTutorialPage } from './css-tutorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssTutorialPageRoutingModule
  ],
  declarations: [CssTutorialPage]
})
export class CssTutorialPageModule {}
