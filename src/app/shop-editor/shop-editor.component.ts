import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-shop-editor',
  templateUrl: './shop-editor.component.html',
  styleUrls: ['./shop-editor.component.css']
})
export class ShopEditorComponent {
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

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.shopForm.value);
  }

  constructor(private fb: FormBuilder) { }
}