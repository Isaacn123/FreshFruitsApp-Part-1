import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FogotpasswordPageRoutingModule } from './fogotpassword-routing.module';

import { FogotpasswordPage } from './fogotpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FogotpasswordPageRoutingModule
  ],
  declarations: [FogotpasswordPage]
})
export class FogotpasswordPageModule {}
