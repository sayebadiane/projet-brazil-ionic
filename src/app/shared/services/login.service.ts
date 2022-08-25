import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = "http://localhost:8000/api/login_check"

  constructor(private http: HttpClient) {

  }
  token(login: any, password: any): Observable<any> {
    const loginData = {
      "login": login,
      "password": password
    }
    return this.http.post<any>(this.url, loginData).pipe(
    )

  }
  login(pUsername: any, pPassword: any) {


  }
}
