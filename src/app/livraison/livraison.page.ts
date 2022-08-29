import { Component, OnInit } from '@angular/core';
import { LivraisonService } from '../shared/services/livraison.service';
import { LoginService } from '../shared/services/login.service';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
})
export class LivraisonPage implements OnInit {
 
  public listeLivraisons: any = []

  constructor(private storage: StorageService ,private serviceLivraison: LivraisonService) { }

 ngOnInit() {
    let verifytoken = this.storage.get('user').then(data => { })
    console.log(verifytoken)
    this.serviceLivraison.ListerLivraison().subscribe(data => {
      this.listeLivraisons = data.filter(produit => produit.livreur.id===36)

    }) 
  }
}
