import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../shared/services/commande.service';

@Component({
  selector: 'app-gestionnaire-commande',
  templateUrl: './gestionnaire-commande.page.html',
  styleUrls: ['./gestionnaire-commande.page.scss'],
})
export class GestionnaireCommandePage implements OnInit {
  public commande:any

  constructor(private servicecommande: CommandeService) { }

  ngOnInit() {
    this.servicecommande.commandeAll().subscribe(data => {
      this.commande = data.filter(produit =>
        produit.etat === "en cour")
      console.log(data)



    })
  }

}
