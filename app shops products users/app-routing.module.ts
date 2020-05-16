import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopsComponent }  from './shops/shops.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ShopDetailComponent }  from './shop-detail/shop-detail.component';

import {ShopEditorComponent} from './shop-editor/shop-editor.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopUpdateComponent } from './shop-update/shop-update.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'shops/:_id', component: ShopDetailComponent },
  { path: 'products/:_id', component: ProductDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'shops', component: ShopsComponent },
  { path: 'addshop', component: ShopEditorComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'addproduct', component: ProductEditorComponent},
  { path: 'updateshop/:_id', component: ShopUpdateComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/:_id', component: UserDetailComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
