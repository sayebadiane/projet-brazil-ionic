import { Component } from '@angular/core';
import { CatalogueService } from '../shared/services/catalogue.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public catalogues :any

  constructor() {}

}
