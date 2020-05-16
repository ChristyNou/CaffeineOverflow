import { Component} from '@angular/core';

import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';

import { FormArray } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ProductsComponent } from '../products/products.component';


@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent{

  productForm = this.fb.group({
    productname: ['',  Validators.required],
    description: ['',  Validators.required],
    category: ['',  Validators.required],
    construct: ['',  Validators.required],
    type: ['',  Validators.required],
    quantity: ['',  Validators.required],
    


    tags: this.fb.array([
      this.fb.control('')
    ])
  });

  get tags() {
    return this.productForm.get('tags') as FormArray;
  }

  addtags() {
    this.tags.push(this.fb.control(''));
  } 

  myproduct : Product;
 

  //i = 0;
  onSubmit() {
    // TODO: Use EventEmitter with form value
    //this.xri = this.shopForm.get('shopname').value; 
   // this.productForm.controls['productname'].value ;
    
    //this.myshop = { id: (this.i++) , name: this.shopForm.get('shopname').value};
 
    this.myproduct = {name: this.productForm.controls['productname'].value, 
                    description: this.productForm.controls['description'].value, 
                    category:this.productForm.controls['category'].value,
                    tags: this.productForm.controls['tags'].value };
                    construct:this.productForm.controls['construct'].value,
                    type:this.productForm.controls['type'].value,
                    quantity:this.productForm.controls['quantity'].value,
                    

    this.productService.create(this.myproduct)
   .subscribe(
     //Response => {Response.
     error => {console.log(this.productForm.value);}
    );

    //this.router.navigate(['/products']);
    
  }
  

  constructor(private fb: FormBuilder,private productService: ProductService,private router: Router) { }
}