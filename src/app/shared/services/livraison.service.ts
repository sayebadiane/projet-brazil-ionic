import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { livraisons } from '../models/livraison';


@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  private url = "http://localhost:8000/api/livraisons"
  private urlget = "http://localhost:8000/api/livraisons"

  constructor(private http: HttpClient) { }
 
  ListerLivraison(): Observable<livraisons[]> {

    return this.http.get<any>(this.urlget).pipe(
      map(data => {
        let liste: any = data["hydra:member"]
        data = liste
        return data
      })
    )

  }
}
