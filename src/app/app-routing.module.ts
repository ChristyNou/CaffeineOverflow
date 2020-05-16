import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopsComponent }  from './shops/shops.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ShopDetailComponent }  from './shop-detail/shop-detail.component';

import {ShopEditorComponent} from './shop-editor/shop-editor.component';

const routes: Routes = [
  { path: 'detail/:id', component: ShopDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'shops', component: ShopsComponent },
  { path: 'shop-editor', component: ShopEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
