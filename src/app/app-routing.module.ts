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
import { SearchResultsComponent } from "./products/search-results.component";

import { LoggedIn } from "./users/loggedin.service";

import { AuthResolver } from "./users/auth-resolver.service";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full", resolve: { AuthResolver } },
  { path: "home", component: ProductHighlightsComponent, resolve: { AuthResolver } },
  { path: "login", component: LoginComponent, resolve: { AuthResolver } },
  { path: "register", component: RegisterComponent, resolve: { AuthResolver } },
  { path: "product/:id", component: ProductDisplayComponent, resolve: { AuthResolver } },
  { path: "cart", component: CartComponent, resolve: { AuthResolver } },
  { path: "checkout", component: CheckoutComponent, resolve: { AuthResolver } },
  { path: "summary", component: SummaryComponent, resolve: { AuthResolver } },
  { path: "order/:id", component: OrderComponent, resolve: { AuthResolver } },
  { path: "order-history", component: OrderHistoryComponent, resolve: { AuthResolver } },
  { path: "products/category/:category", component: ProductListComponent, resolve: { AuthResolver } },
  { path: "profile", component: ProfileComponent, resolve: { AuthResolver }, canActivate: [LoggedIn] },
  { path: "edit-address", component: AddressComponent, resolve: { AuthResolver }, canActivate: [LoggedIn] },
  { path: "search/:searchTerms", component: SearchResultsComponent, resolve: { AuthResolver } }    
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AuthResolver ]
})
export class AppRoutingModule {}