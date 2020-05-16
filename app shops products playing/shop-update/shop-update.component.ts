import { Component,Input,OnInit} from '@angular/core';

import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';

import { FormArray } from '@angular/forms';
import { ShopService } from '../shop.service';
import { Shop } from '../shop';
import { first } from 'rxjs/operators';
import { ShopsComponent } from '../shops/shops.component';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { template } from '@angular/core/src/render3';


@Component({
  selector: 'app-shop-update',
  templateUrl: './shop-update.component.html',
  styleUrls: ['./shop-update.component.css']
})
export class ShopUpdateComponent{

  @Input() shop: Shop;

 // myid: Shop;

  ngOnInit(): void {
     this.getShop(); 
  }

  getShop(): void {
    var id  = this.route.snapshot.paramMap.get('_id');
    //var panos = id.toString();
    this.shopService.getShop(id)
      .subscribe(shop => this.shop = shop);
  } 

  updateshopForm = this.fb.group({
    //id:['',  Validators.required],
    shopname: ['',  Validators.required],
    address: this.fb.group({
      street: ['',  Validators.required],
      city: ['',  Validators.required],
      state: ['',  Validators.required],
      zip: ['']  

    }),

    tags: this.fb.array([
      this.fb.control('')
    ])
  });

  get tags() {
    return this.updateshopForm.get('tags') as FormArray;
  }

  addtags() {
    this.tags.push(this.fb.control(''));
  } 

  myshop : Shop;
 

  i = 0;
  onSubmit() {
    // TODO: Use EventEmitter with form value
    //this.xri = this.shopForm.get('shopname').value; 
    this.updateshopForm.controls['shopname'].value ;
    
    //this.myshop = { id: (this.i++) , name: this.shopForm.get('shopname').value};
 
    this.myshop = { /*_id:  this.updateshopForm.controls['id'].value ,*/  name: this.updateshopForm.controls['shopname'].value, 
                    address : (this.updateshopForm.get('address.street').value).concat(",").concat(this.updateshopForm.get('address.city').value)
                    .concat(",").concat(this.updateshopForm.get('address.state').value).concat(",").concat(this.updateshopForm.get('address.zip').value),
                   lat: 50 , lng: 60 , tags: this.updateshopForm.controls['tags'].value };

    this.shopService.updateShop(this.myshop)
   .subscribe(
     //Response => {Response.
     error => {console.log(this.updateshopForm.value);}
    );
    
   // this.router.navigate(['/shops']);
  }

  constructor(private fb: FormBuilder,private shopService: ShopService,private router: Router,
    private route: ActivatedRoute) { }
}