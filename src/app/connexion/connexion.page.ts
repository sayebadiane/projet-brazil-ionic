import { Component, Injectable, OnInit } from '@angular/core';
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
  role: any;
  URL ="http://localhost:8200/"
  constructor(private service: LoginService, private serviceautho: AutoService, private router: Router, public toastController: ToastController, private storage: StorageService) { }

  ngOnInit(): void {


  }
  generationToken() {
    this.service.token(this.logine, this.password).subscribe(data => {
      this.tok = data;
      
      this.storage.set('token', data.token)
      this.storage.set('user', data.user).then(() => {
        // window.location.reload();

        window.addEventListener("load", event => {
          document.getElementById("reload").onclick = function () {
            location.reload();
          }
        });



      });
      // this.storage.get('user').then((data) => {
      //   console.log('Your age is', data);
      // });
      
      this.serviceautho.token = data.token;
      if (data.token != '') {
        this.connexionReusie()
        this.storage.get('token').then((data) => {
          let tabtoken = this.service.getDecodeToken(data)
         
          console.log(tabtoken.roles[0])
          this.role = tabtoken.roles[0]
          if (this.role === "ROLE-LIVREUR") {
           
            this.router.navigate(['/catalogue'])  
          }
        
}
        );
        this.router.navigate(['/catalogue'])
      }
    }, error => {

       alert('login ou mot de passe incorect')
    })

  }
  login(logine: any, password: any) {
    throw new Error('Method not implemented.');
  }
  async connexionReusie() {
    const toast = await this.toastController.create({
      message: 'La connexion est reussie',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }


}
