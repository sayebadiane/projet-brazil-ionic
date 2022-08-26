import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(public route: ActivatedRoute,private detailcommandeService: DetailCommandeService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    alert(id)
    this.detailcommandeService.detailCommande(id).subscribe(
      data => {
        this.details = data
        console.log(data)
      }
    )
  }
 

}
