import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, ParamMap } from '@angular/router';

import { Product } from "../products/product";

import { ProductService } from "../products/product.service";

// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  // styleUrls: ['./app.component.css']
})
export class CartComponent implements OnInit {
  // private product: Product;

  constructor(
    private productService: ProductService
    // private route: ActivatedRoute,    
  ) {}

  ngOnInit(): void {
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.productService.getProduct(+params.get("id")))
    //   .subscribe(product => this.product = product);
  }

  removeFromCart(product: Product): void {
    console.log("Clicked");
    this.productService.deleteFromCart(product);
  }
}