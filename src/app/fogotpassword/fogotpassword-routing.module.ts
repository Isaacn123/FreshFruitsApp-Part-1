import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FogotpasswordPage } from './fogotpassword.page';

const routes: Routes = [
  {
    path: '',
    component: FogotpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FogotpasswordPageRoutingModule {}
