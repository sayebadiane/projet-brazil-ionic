import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'catalogue',
    pathMatch: 'full'
  },
  {
    path: 'catalogue',
    loadChildren: () => import('./catalogue/catalogue.module').then( m => m.CataloguePageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then(m => m.ConnexionPageModule)
  },
  {
    path: 'commande',
    loadChildren: () => import('./commande/commande.module').then( m => m.CommandePageModule)
  },
  {
    path: 'gestionnaire-commande',
    loadChildren: () => import('./gestionnaire-commande/gestionnaire-commande.module').then( m => m.GestionnaireCommandePageModule)
  },
  {
    path: 'detail-commande/:id',
    loadChildren: () => import('./detail-commande/detail-commande.module').then( m => m.DetailCommandePageModule)
  },
  {
    path: 'livraison',
    loadChildren: () => import('./livraison/livraison.module').then( m => m.LivraisonPageModule)
  },
  {
    path: 'qr/:id',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'qr-client',
    loadChildren: () => import('./qr-client/qr-client.module').then( m => m.QrClientPageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./panier/panier.module').then( m => m.PanierPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
