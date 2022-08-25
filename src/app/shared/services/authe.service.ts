import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  public token = "";
  public user: number = 0

  constructor() { }
}
