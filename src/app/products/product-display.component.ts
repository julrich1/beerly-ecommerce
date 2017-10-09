import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Product } from "./product";

import { ProductService } from "./product.service";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  private product: Product;
  private quantities: Array<number>;
  private quantity: any = "1";

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,    
  ) {
    this.quantities = new Array(100).fill(0);
    this.quantities = this.quantities.map((val, index) => index+1);
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.productService.getProduct(+params.get("id")))
      .subscribe(product => this.product = product);
  }

  add(product): void {
    console.log("QTY TESTING:", this.quantity);
    // product.quantity = parseInt(this.quantity);
    console.log("PRODUCT QUANTITY IN DISPLAY COMPONENT:", product.quantity)
    this.productService.addToCart(product, parseInt(this.quantity)).then(() => {
      //Do something?
    });
  }
}