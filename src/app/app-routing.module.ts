import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ProductHighlightsComponent }   from './products/product-highlights.component';
import { ProductDisplayComponent } from "./products/product-display.component";
import { LoginComponent } from "./users/login.component";
import { RegisterComponent } from "./users/register.component";
import { CartComponent } from "./orders/cart.component";
import { CheckoutComponent } from "./orders/checkout.component";
import { SummaryComponent } from "./orders/summary.component";
import { OrderComponent } from "./orders/order.component";
import { OrderHistoryComponent } from "./orders/order-history.component";
import { ProductListComponent } from "./products/product-list.component";
import { ProfileComponent } from "./users/profile.component";
import { AddressComponent } from "./users/address.component";
 
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: ProductHighlightsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "product/:id", component: ProductDisplayComponent },
  { path: "cart", component: CartComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "summary", component: SummaryComponent },
  { path: "order/:id", component: OrderComponent },
  { path: "order-history", component: OrderHistoryComponent },
  { path: "products/category/:category", component: ProductListComponent },
  { path: "profile", component: ProfileComponent },
  { path: "edit-address", component: AddressComponent }  
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}