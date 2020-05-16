import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop';

import { ShopService } from '../shop.service';


@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  shops : Shop[];

  constructor(private shopService: ShopService) { }

  getShops(): void {
    this.shopService.getShops()
        .subscribe(shops => this.shops = shops);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.shopService.addShop({ name } as Shop)
      .subscribe(shop => {
        this.shops.push(shop);
      });
  }

  delete(shop: Shop): void {
    this.shops = this.shops.filter(h => h !== shop);
    this.shopService.deleteShop(shop).subscribe();
  }
  

  ngOnInit() {
    this.getShops();
  }

}
