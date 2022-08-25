import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../shared/services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {
  public commande:any

  constructor(private servicecommande: CommandeService) { }

  ngOnInit(): void {
    this.servicecommande.commandeClient().subscribe(data => {
      this.commande = data.filter(produit=>(produit.etat=="terminer"))
      
    })
  }


}
