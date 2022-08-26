import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { LoginService } from './shared/services/login.service';
import { StorageService } from './shared/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public role: any
  

  constructor(private storage: Storage, private storages: StorageService, private loginservice: LoginService, private route:Router) {
    this.storage.create();

   
    
  }
  
  getToken(): any{
    
    
    let bool = false
    this.storage.get('token').then((data) => {
      console.log(data)
      if (data != null) {
        let tabtoken = this.loginservice.getDecodeToken(data)
        console.log(tabtoken.roles[0])
        this.role = tabtoken.roles[0]
        console.log(this.role)
        return data
       
      }
    });
    return this.role
  }
  
  logoutClicked() {
    alert('deconnexion')
    this.storage.clear();
    this.route.navigate(['/catalogue'])
    location.reload()
    
  } 
  
  
}
