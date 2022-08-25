import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from './shared/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage, private storages: StorageService) {
    this.storage.create();
    
  }
  
  getData(): boolean{
    let bool = false
    this.storage.get('token').then((data) => {
      if (data != null) {

       bool=true
      }
    });
    return bool
  }
 
 

 
}
