import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { buffer, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Catalogue } from '../models/catalogue';
@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private url: string = "http://localhost:8000/api/catalogues"
  private urlBurger: string = "http://localhost:8000/api/burgers"
  constructor(private http: HttpClient) { }

  all(): Observable<Catalogue> {
    return this.http.get<any>(this.url).pipe(
      // tap(console.log)

      map(
        data => {


          let catalogue: Catalogue = {
            burgers: data['hydra:member'][0]['burgers'],
            menus: data['hydra:member'][1]['menus']
          }

          data.produits = [...catalogue.burgers, ...catalogue.menus]



          return data
        }
      )
    )

  };
  // all(): Observable<Catalogue> {
  //   return this.http.get<Catalogue>(this.url).pipe(
  //     map(data => {
  //        data.produits = [...data.burgers, ...data.menus]
  //       return data
  //     })
  //   );
  // }
  allBurger(): Observable<Catalogue> {
    return this.http.get<Catalogue>(this.url).pipe(
      // tap(console.log)

      map(
        data => {
          data.produits = [...data.burgers]
          // console.log(data.produits)

          return data
        }
      )
    )

  };
  allMenu(): Observable<Catalogue> {
    return this.http.get<Catalogue>(this.url).pipe(
      // tap(console.log)

      map(
        data => {
          data.produits = [...data.burgers]
          // console.log(data.produits)

          return data
        }
      )
    )


  };
}