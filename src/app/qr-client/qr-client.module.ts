import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrClientPageRoutingModule } from './qr-client-routing.module';
import { QrClientPage } from './qr-client.page';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrClientPageRoutingModule,
    ZXingScannerModule,
  ],
  declarations: [QrClientPage]
})
export class QrClientPageModule {
  
}
