import { Component, OnInit,OnDestroy } from '@angular/core';
import { Shop } from '../shop';

import { ShopService } from '../shop.service';

import { PageEvent } from "@angular/material";
import { Subscription } from "rxjs";


import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  shops : Shop[];

  totalPosts = 30;
  count = 20;
  start = 0;

  //currentPage = 1;
  pageSizeOptions = [1,2,3,4,5,6];

  status = 'ALL';
  sort = 'name|ASC';
  search = "";



  constructor(private shopService: ShopService) { }

  getShops(): void {
    this.shopService.getShops(this.count,this.start,this.status,this.sort,this.search)
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

  onChangedPage(pageData:PageEvent){
    //console.log(pageData);
    this.start = pageData.pageIndex +1;//this.start + 1; //pageData.pageIndex +1;
    this.count = pageData.pageSize  //this.count ; //pageData.pageSize;
    this.shopService.getShops(this.count,this.start,this.status,this.sort,this.search);

  }
  

  ngOnInit() {
    this.getShops();
  }



}
