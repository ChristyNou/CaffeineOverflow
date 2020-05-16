import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop';
import { ShopService } from '../shop.service';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  shops: Shop[] = [];
  products: Product[] = [];

  constructor(private shopService: ShopService,
              private productService: ProductService) { }

  ngOnInit() {
    this.getShops2();
    this.getProducts();
  }

  getShops2(): void {
    this.shopService.getShops2()
      .subscribe(shops => this.shops = shops.slice(0, 4));
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products.slice(0, 4));
  }

  
}