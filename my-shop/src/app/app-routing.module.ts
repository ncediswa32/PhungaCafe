import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PaymentComponent } from './payment/payment.component';


import { MenuofGodComponent } from './menuof-god/menuof-god.component'
import { ViewoneComponent } from './viewone/viewone.component';
// import { CheckoutComponent } from './checkout/checkout.component';
import { GodcartComponent } from './godcart/godcart.component';
import { GodcheckoutComponent } from './godcheckout/godcheckout.component';


import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuofGodComponent},
  { path: 'view/:id', component: ViewoneComponent},
  // { path: "Checkout", component: CheckoutComponent },
  { path: 'Cart', component: GodcartComponent},
  { path: 'Checkout', component: GodcheckoutComponent},

  { path: 'category', component: CategoryComponent},
  { path: 'products', component: ProductListComponent},
  { path: 'Payment', component: PaymentComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
