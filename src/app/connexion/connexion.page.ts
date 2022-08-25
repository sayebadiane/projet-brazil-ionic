import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AutoService } from '../shared/services/authe.service';
import { LoginService } from '../shared/services/login.service';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  password: any
  
  tok:any
  logine: any;

  constructor(private service: LoginService, private serviceautho: AutoService, private router: Router, public toastController: ToastController, private storage: StorageService) { }

  ngOnInit(): void {


  }
  generationToken(): void {
    this.service.token(this.logine, this.password).subscribe(data => {
      this.tok = data;
      
      this.storage.set('token', data.token);
      this.storage.set('user', data.user);
      this.storage.get('user').then((data) => {
        console.log('Your age is', data);
      });
      
      this.serviceautho.token = data.token;
      if (data.token != '') {

       this.connexionReusie()
        this.router.navigate(['catalogue'])
      }

    }, error => {

       alert('login ou mot de passe incorect')
    })

  }
  login(logine: any, password: any) {
    throw new Error('Method not implemented.');
  }
  connexionReusie() {
    message: 'Your settings have been saved.'
    alert("connexion reussie")

    
  }


}
