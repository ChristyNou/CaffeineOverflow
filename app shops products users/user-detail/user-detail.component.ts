import { Component, OnInit, Input } from '@angular/core';

import { User } from '../user';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService }  from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }
  
  getProduct(): void {
    var id = this.route.snapshot.paramMap.get('_id');
    this.userService.getUser(id)
      .subscribe(product => this.user = product);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.userService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }


}
