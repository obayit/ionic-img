import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoolTutorialPageRoutingModule } from './cool-tutorial-routing.module';

import { CoolTutorialPage } from './cool-tutorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoolTutorialPageRoutingModule
  ],
  declarations: [CoolTutorialPage]
})
export class CoolTutorialPageModule {}
