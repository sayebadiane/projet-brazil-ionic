import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  // const qr:  QRScanner;
  
  createdcode = null
  qrData=null
 

  constructor(
    
    private qrScanner: QRScanner,
    public alertController: AlertController
  ) { }

  ngOnInit() { 
    this.scancode()
    
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
  scancode() {
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
}
