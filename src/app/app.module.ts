import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list.component';
import { ProductHighlightsComponent } from './product-highlights.component';
import { HighlightsBannerComponent } from "./highlights-banner.component";
import { LoginComponent } from "./login.component";

import { ProductService }     from './product.service';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ProductHighlightsComponent,
    HighlightsBannerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
