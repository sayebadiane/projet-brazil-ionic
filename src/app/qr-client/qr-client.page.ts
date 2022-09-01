import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { AlertController } from '@ionic/angular';
import { LivraisonService } from '../shared/services/livraison.service';
import { StorageService } from '../shared/services/storage.service';



@Component({
  selector: 'app-qr-client',
  templateUrl: './qr-client.page.html',
  styleUrls: ['./qr-client.page.scss'],
})
export class QrClientPage implements OnInit {

  public listeLivraisons: any = []
  qrResultString: string;

  constructor(

    private qrScanner: QRScanner,
    public alertController: AlertController,
    private storage: StorageService,
    private serviceLivraison: LivraisonService
    
  ) { }
  
  ngOnInit() {
    let verifytoken = this.storage.get('user').then(data => { })
    console.log(verifytoken)
    this.serviceLivraison.ListerLivraison().subscribe(data => {
      this.listeLivraisons = data.filter(produit => produit.livreur.id === 36)

    })
  }
  scancode() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          alert("ok")
          // camera permission was granted

          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }



  scannercode() {


   


    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted


          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));


  }
  handleQrCodeResult(resultString: string) {
    alert(resultString)
    console.log('Result: ', resultString);
    this.qrResultString = resultString;
  }

}
