import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplementDetail } from '../shared/models/complementDetail';
import { ComplementDetailService } from '../shared/services/complement-detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  details:ComplementDetail|undefined=undefined

  constructor(private detailServices: ComplementDetailService, public route: ActivatedRoute) { }
  
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.detailServices.detail(id).subscribe(
      data => {
        this.details = data
        console.log(this.details)
      }
    )
  }
  slideOpts = {
    initialSlide: 1,
    speed: 100,
    loop: true,
    autoplay: {
      delay: 3000
    }
  };

}
