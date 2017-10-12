import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http'; 

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductHighlightsComponent } from './products/product-highlights.component';
import { HighlightsBannerComponent } from "./products/highlights-banner.component";
import { ProductDisplayComponent } from "./products/product-display.component";
import { CartComponent } from "./orders/cart.component";
import { CheckoutComponent } from "./orders/checkout.component";
import { LoginComponent } from "./users/login.component";
import { RegisterComponent } from "./users/register.component";
import { SummaryComponent } from "./orders/summary.component";
import { OrderComponent } from "./orders/order.component";
import { OrderHistoryComponent } from "./orders/order-history.component";
import { ProfileComponent } from "./users/profile.component";
import { AddressComponent } from "./users/address.component";

import { ProductService }     from './products/product.service';
import { UserService }     from './users/user.service';
import { LoggedIn }     from './users/loggedin.service';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ProductHighlightsComponent,
    HighlightsBannerComponent,
    LoginComponent,
    RegisterComponent,
    ProductDisplayComponent,
    CartComponent,
    CheckoutComponent,
    SummaryComponent,
    OrderComponent,
    OrderHistoryComponent,
    ProfileComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ProductService, UserService, LoggedIn],
  bootstrap: [AppComponent]
})
export class AppModule { }
