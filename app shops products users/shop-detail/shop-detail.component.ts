import { Component, OnInit,Input} from '@angular/core';
import { Shop } from '../shop';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ShopService }  from '../shop.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {
  @Input() shop: Shop;

  ngOnInit(): void {
    this.getShop();
  }


  

  getShop(): void {
    var id  = this.route.snapshot.paramMap.get('_id');
    //var panos = id.toString();
    this.shopService.getShop(id)
      .subscribe(shop => this.shop = shop);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.shopService.updateShop(this.shop)
      .subscribe(() => this.goBack());
  }

  delete(shop: Shop): void {
    this.shopService.deleteShop(shop)
    .subscribe(() => this.goBack());
  }

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService,
    private location: Location
  ) {}


}
