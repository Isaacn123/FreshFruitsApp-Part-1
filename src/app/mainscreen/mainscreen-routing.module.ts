import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainscreenPage } from './mainscreen.page';

const routes: Routes = [
  {
    path: '',
    component: MainscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainscreenPageRoutingModule {}
