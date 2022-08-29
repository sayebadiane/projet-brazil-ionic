import { Component, OnInit } from '@angular/core';
import { QRScannerStatus } from '@ionic-native/qr-scanner';

import { QRScanner} from '@ionic-native/qr-scanner';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  // const qr:  QRScanner;
  
  createdcode = null
  qrData=null
 

  constructor() { }

  ngOnInit() { 
    
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
