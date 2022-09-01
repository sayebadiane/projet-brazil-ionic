import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrClientPage } from './qr-client.page';

const routes: Routes = [
  {
    path: '',
    component: QrClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrClientPageRoutingModule {}
