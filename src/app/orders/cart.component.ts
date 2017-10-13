import { Component } from '@angular/core';

import { Product } from "../products/product";

import { ProductService } from "../products/product.service";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  private tax: number;
  private subtotal: number;
  private shipping: number;
  private total: number;

  constructor(
    private productService: ProductService
  ) {}

  removeFromCart(product: Product): void {
    this.productService.deleteFromCart(product);
  }
}