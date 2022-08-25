import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionnaireCommandePageRoutingModule } from './gestionnaire-commande-routing.module';

import { GestionnaireCommandePage } from './gestionnaire-commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionnaireCommandePageRoutingModule
  ],
  declarations: [GestionnaireCommandePage]
})
export class GestionnaireCommandePageModule {}
