import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RangeCustomEvent, RangeValue } from '@ionic/core';
import { filter } from 'rxjs/operators';

import { CatalogueService } from '../shared/services/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
  public catalogues: any
  lastEmittedValue: RangeValue;
  prix = 1500

  constructor(private catalogueServices: CatalogueService, private alertController: AlertController) { }

  ngOnInit() {
    this.catalogueServices.all().subscribe(data => {
      this.catalogues = data.produits
      console.log(data)
    })
  }
  ok(){
  alert("ok");
  }
  slideOpts = {
    initialSlide: 1,
    speed: 100,
    loop: true,
    autoplay: {
      delay:3000
    }
  };
  filtreMenuBurger(a: string): void {
    

    this.catalogueServices.all().subscribe(data => {
      if (a == "") {
        this.catalogues = data.produits
      }
      else {


        this.catalogues = data.produits?.filter(produit =>
          produit.type === a)


      }
    })
  }
  async filtrePrix(ev :Event) {
    const alert = await this.alertController.create({
     
      
      buttons: [{
        text:'ok',
        handler: (value: any)=>{
          this.catalogueServices.all().subscribe(data => {
           this.catalogues=data.produits.filter(produit=>produit.prix<=value.rang)
         })
        }
        
      }],
     
      inputs: [
        
        {
          type: 'range',
          placeholder: 'Age',
          name:'rang',
          min: 1500,
          max:20000
        
        },
        
      ],
    
    }
    );
      
      
  
   

    await alert.present();
    console.log(ev)
  }

}
