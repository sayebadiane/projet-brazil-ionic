import { Component, OnInit } from '@angular/core';
import { Commande } from '../shared/models/commande';
import { CommandeService } from '../shared/services/commande.service';
import { PanierService } from '../shared/services/panier.service';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  public panier: Commande | undefined

  constructor(private storage: StorageService,private service: PanierService, private serviceCommande: CommandeService) { }

  ngOnInit(): void {
    this.panier = this.service.panier
    // console.log(this.panier)
    this.storage.set("p", JSON.stringify(this.panier))

    console.log(this.panier)

  }

}
