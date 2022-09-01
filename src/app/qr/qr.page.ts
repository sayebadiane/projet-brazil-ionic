import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { StorageService } from '../shared/services/storage.service';
import { LivraisonService } from '../shared/services/livraison.service';
import { ActivatedRoute } from '@angular/router';
import { DetailCommandeService } from '../shared/services/detail-commande.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  // const qr:  QRScanner
  public commande: any 
  
  createdcode = null
  qrData = null
  commandeId:any
  clientId: any;
  objectqrc:any
 
  constructor(
    public alertController: AlertController,
    private storage: StorageService,
    private serviceLivraison: LivraisonService,
    private qrScanner: QRScanner,
    public route: ActivatedRoute,
    private detailcommandeService: DetailCommandeService
  ) { }


 async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
   this.detailcommandeService.detailCommande(id).subscribe(
     data => {
       this.commandeId = data.id
       this.clientId = data.client.id
       this.objectqrc = JSON.stringify({
         "commandeId": this.commandeId,
         "clientId": this.clientId
       }
       ) 
       alert(this.objectqrc)
     }
   )
  
  //   let verifytoken = await this.storage.get('user')
  //  console.log(verifytoken)
  //  alert(verifytoken)
    // this.serviceLivraison.ListerLivraison().subscribe(data => {
    //   this.listeLivraisons = data.filter(produit => produit.commande.filter(item => {
    //     item.id === Number(id)
    //   }) )
    //    console.log(this.listeLivraisons)
    // })
    // console.log(this.commandeId)
  }
  // scan() {
  //   this.qr.prepare().then((status: QRScannerStatus) => {
  //     if (status.authorized) {
  //       this.qr.show()
  //       document.getElementsByTagName("body")[0].style.opacity = "0.5"
  //       this.qr.scan().subscribe((val1) => {
  //         alert(val1)
  //         document.getElementsByTagName("body")[0].style.opacity = "1"
  //       })
        
  //     }
  //     else if (status.denied) {
        
  //     } 
  //     else {
        
  //     }
  //   })
  // }
  generatecode() {
    this.createdcode=this.qrData
    
  }
 
}
