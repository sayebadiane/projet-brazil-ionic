import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPage } from './detail.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    RouterModule],
  exports: [RouterModule],
})
export class DetailPageRoutingModule {}
