import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

import { ComplementDetail } from '../models/complementDetail';
import { Commande } from '../models/commande';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private url: string = "http://localhost:8000/api/commandes"
  private urlget: string = "http://localhost:8000/api/clients"
  private urlterminer: string = "http://localhost:8000/api/zones"
  public commande: Commande[] | undefined

  constructor(private http: HttpClient, private storage: StorageService) { }
  commenderBack(montant: any, burgerCommandes: any, menuCommandes: any, zone: any): Observable<any> {
    const loginData = {
      "montant": montant,
      "burgerCommandes": burgerCommandes,
      "menuCommandes": menuCommandes,
      "zone": zone
    }
    return this.http.post<any>(this.url, loginData).pipe(

    )

  }

  commandeClient(): Observable<Commande[]> {
    let id: any =  this.storage.get('user').then((data) => {});
    alert(id)
    console.log(id);



    return this.http.get<any>(`${this.urlget}/21/commandes`).pipe(
      map(data => {
        let catalogue: Commande = data['hydra:member']
        console.log("voici l objet" + data['hydra:member'][0])
        data = catalogue
        return data

      })
    )



  }
  commandeAll(): Observable<Commande[]> {
    return this.http.get<any>(this.url).pipe(
      map(
        data => {
          let catalogue: Commande = data['hydra:member']
          data = catalogue

          return data
        }
      )
    )


  }
  commandeTerminerZone(): Observable<Commande[]> {
    // let id: any = localStorage.getItem("user")
    // console.log(id);



    return this.http.get<any>(`${this.urlterminer}/1/commandes`).pipe(
      map(data => {
        let catalogue: Commande = data['hydra:member']
        console.log("voici l objet" + data['hydra:member'][0])
        data = catalogue
        return data

      })
    )
  }

}
