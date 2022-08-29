import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { NgxQRCodeModule } from 'ngx-qrcode2';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot(),
    NgxQRCodeModule,
    BrowserModule,

    IonicStorageModule.forRoot(),
    
   
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
               ],
  bootstrap: [AppComponent],
})
export class AppModule {}
