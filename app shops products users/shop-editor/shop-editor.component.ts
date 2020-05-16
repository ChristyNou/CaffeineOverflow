import { Component} from '@angular/core';

import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';

import { FormArray } from '@angular/forms';
import { ShopService } from '../shop.service';
import { Shop } from '../shop';
import { first } from 'rxjs/operators';
import { ShopsComponent } from '../shops/shops.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shop-editor',
  templateUrl: './shop-editor.component.html',
  styleUrls: ['./shop-editor.component.css']
})
export class ShopEditorComponent{

  shopForm = this.fb.group({
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
    return this.shopForm.get('tags') as FormArray;
  }

  addtags() {
    this.tags.push(this.fb.control(''));
  } 

  myshop : Shop;
 

  i = 0;
  onSubmit() {
    // TODO: Use EventEmitter with form value
    //this.xri = this.shopForm.get('shopname').value; 
    this.shopForm.controls['shopname'].value ;
    
    //this.myshop = { id: (this.i++) , name: this.shopForm.get('shopname').value};
 
    this.myshop = {name: this.shopForm.controls['shopname'].value, 
                    address : (this.shopForm.get('address.street').value).concat(",").concat(this.shopForm.get('address.city').value)
                    .concat(",").concat(this.shopForm.get('address.state').value).concat(",").concat(this.shopForm.get('address.zip').value),
                   lat: 50 , lng: 60 , tags: this.shopForm.controls['tags'].value };

    this.shopService.create(this.myshop)
   .subscribe(
     //Response => {Response.
     error => {console.log(this.shopForm.value);}
    );
    
   // this.router.navigate(['/shops']);
  }

  constructor(private fb: FormBuilder,private shopService: ShopService){}//,private router: Router) { }
}