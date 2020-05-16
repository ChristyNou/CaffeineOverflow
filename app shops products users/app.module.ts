import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShopsComponent } from './shops/shops.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule }     from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { ShopSearchComponent } from './shop-search/shop-search.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ShopEditorComponent } from './shop-editor/shop-editor.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ShopUpdateComponent } from './shop-update/shop-update.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxPaginationModule} from 'ngx-pagination';

import {MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatPaginatorModule} from "@angular/material";
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component'; 

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    NgxPaginationModule

   /* HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ) */
  ],
  declarations: [
    AppComponent,
    ShopsComponent,
    ShopDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ShopSearchComponent,
    ShopEditorComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductSearchComponent,
    ProductEditorComponent,
    ShopUpdateComponent,
    UsersComponent,
    UserDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
