import { Component, OnInit } from '@angular/core';

import { Product } from "../products/product";

import { ProductService } from "../products/product.service";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private tax: number;
  private subtotal: number;
  private shipping: number;
  private total: number;

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getCart();
    // this.subtotal = this.productService.cartTotal;
    // console.log(this.subtotal);
    // this.shipping = 13.00;
    // this.tax = parseInt((this.subtotal * .097).toFixed(2));
    // this.total = parseInt((this.subtotal + this.shipping + this.tax).toFixed(2));
  }

  removeFromCart(product: Product): void {
    this.productService.deleteFromCart(product);
  }
}