import { Component, OnInit } from '@angular/core';
import { Commande } from '../shared/models/commande';
import { DetailCommandeService } from '../shared/services/detail-commande.service';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.page.html',
  styleUrls: ['./detail-commande.page.scss'],
})
export class DetailCommandePage implements OnInit {
  commande: Commande | undefined
  public details

  constructor(private detailcommandeService: DetailCommandeService) { }

  ngOnInit() {
    this.detailcommandeService.detailCommande().subscribe(
      data => {
        this.details = data
        console.log(data)
      }
    )
  }
 

}
