import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from '../shared/services/commande.service';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {
  public commande: any
  filterDate: any
  filterEtat = "en cour"
  id:any

  constructor(private storage: StorageService,private servicecommande: CommandeService, public route: ActivatedRoute) { }

  async ngOnInit(){
    this.id = await this.storage.get('user');
    alert(this.id)
   
    this.servicecommande.commandeClient(this.id).subscribe(data => {
      this.commande = data
      console.log(data)
      
    })
  }


}
