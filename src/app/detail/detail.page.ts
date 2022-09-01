import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { menuburgers } from '../shared/models/commande';
import { ComplementDetail } from '../shared/models/complementDetail';
import { ComplementDetailService } from '../shared/services/complement-detail.service';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  details:ComplementDetail|undefined=undefined

  constructor(private detailServices: ComplementDetailService, public route: ActivatedRoute, private services: PanierService) { }
  
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.detailServices.detail(id).subscribe(
      data => {
        this.details = data
        console.log(this.details)
      }
    )
  }
  slideOpts = {
    initialSlide: 1,
    speed: 100,
    loop: true,
    autoplay: {
      delay: 3000
    }
  };
  a = "burger"
  b=2
  yell(e: any) {
    console.log("douleeee" + this.b)
    console.log("dayeeeeeee" + this.a);
    alert("ok")
    if (this.a == 'burger') {
      if (this.details) {
        if (this.services) {
          if (this.details.burgers?.prix && this.b && this.details.nbrBurger) {
            this.details.burgers.prix = this.b * this.details.burgers.prix / this.details.nbrBurger;

          }
          this.details.nbrBurger = this.b;
          let bc: menuburgers = {
            quantite: this.details.nbrBurger,
            burger: this.details.burgers
          }
          let trouve = false
          this.services.panier.burgerCommandes?.map(
            burger => {
              if (burger.burger?.id == bc.burger?.id) {
                trouve = true
                if (trouve) {
                  if (burger.quantite && bc.quantite) {
                    burger.quantite = Number(burger.quantite + bc.quantite)
                  }
                }

              }

            }
          ); if (trouve == false) {
            this.services.addProd(bc, "burger")


          }

          // console.log(this.services.panier?.burgerCommandes)
          // }
        }
      }



    } else if (e[1] == 'menu') {
      if (this.details) {
        if (this.services) {
          if (this.details.menus?.prix && e[0] && this.details.nbrMenu) {
            this.details.menus.prix = e[0] * this.details.menus.prix / this.details.nbrMenu;

          }
          this.details.nbrMenu = e[0];
          let bc: menuburgers = {
            quantite: this.details.nbrMenu,
            burger: this.details.menus
          }



          let trouve = false
          this.services.panier.menuCommandes?.map(
            burger => {
              if (burger.burger?.id == bc.burger?.id) {
                trouve = true
                if (trouve) {
                  if (burger.quantite && bc.quantite) {
                    burger.quantite = Number(burger.quantite + bc.quantite)
                  }
                }

              }

            }
          )
          if (trouve == false) {
            this.services.addProd(bc, "menu")

          }

          // console.log(this.services.panier?.burgerCommandes)
          // }
        }
      }



    }

  }

}
