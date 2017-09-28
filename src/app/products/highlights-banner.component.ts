import { Component, Input, OnInit } from '@angular/core';

import { Product } from "./product"

import { ProductService } from "./product.service";

@Component({
  selector: 'highlights-banner',
  templateUrl: './highlights-banner.component.html',
  // styleUrls: ['./app.component.css']
})
export class HighlightsBannerComponent implements OnInit {
  // products: Array<Product> = [];
  // constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.products = this.productService.getHighlightProducts();
  }
}