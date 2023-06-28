import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuofGodComponent } from './menuof-god/menuof-god.component';
import { ViewoneComponent } from './viewone/viewone.component';
import { GodcheckoutComponent } from './godcheckout/godcheckout.component';
import { GodcartComponent } from './godcart/godcart.component';
import { NavComponent } from './nav/nav.component';



import { EmptyBagComponent } from './empty-bag/empty-bag.component';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PaymentComponent } from './payment/payment.component';
// import { TypesComponent } from './types/types.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuofGodComponent,
    ViewoneComponent,
    EmptyBagComponent,
    CategoryComponent,
    ProductListComponent,
    GodcheckoutComponent,
    GodcartComponent,
    NavComponent,
    PaymentComponent,

    CheckoutComponent,


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
