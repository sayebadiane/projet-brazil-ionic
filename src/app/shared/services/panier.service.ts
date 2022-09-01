import { Injectable } from '@angular/core';


import { Commande, menuburgers } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  // com: Commande | null = null;
  panier: Commande = {
    montant: 0,
    burgerCommandes: [],
    menuCommandes: [],
    zone: undefined
  }

  constructor() { }

  addProd(produits: menuburgers, a: string) {
    if (a == "burger") {
      this.panier?.burgerCommandes?.push(produits)


    }
    else {
      this.panier?.menuCommandes?.push(produits)

    }
    console.log(this.panier)
  }

}
