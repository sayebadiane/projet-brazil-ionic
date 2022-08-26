import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class DetailCommandeService {
  private url: string = "http://localhost:8000/api"
  public commande: Commande| undefined

  constructor(private http: HttpClient) { }
  detailCommande(id:any): Observable<Commande[]> {
    // let id: any = this.storage.get('user').then((data) => { });
    // alert(id)
    // console.log(id);
    return this.http.get<any>(`${this.url}/commandes/${id}`).pipe(
      map(data => {
        // let catalogue: Commande = data['hydra:member']
        
        // data = catalogue
        return data
      })
    )
  }
}
