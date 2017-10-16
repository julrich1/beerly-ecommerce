import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

import { Product } from "./product";

import { ProductService } from "./product.service";

import 'rxjs/add/operator/switchMap';

const ITEMS_PER_PAGE = 10;

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];
  page: Array<Product> = [];

  maxPageNumber: number = 1;
  pageNumber: number = 1;
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.pageNumber = parseInt(params["page"]) || 1;
    });

    this.route.paramMap
    .switchMap((params: ParamMap) => this.productService.getProductsByCategory(params.get("category")))
    .subscribe(result => {
      this.products = result;
      this.maxPageNumber = Math.ceil(this.products.length / ITEMS_PER_PAGE);
      this.populatePage();      
    });
  }

  populatePage() {
    const start = ITEMS_PER_PAGE * (this.pageNumber - 1);
    const end = ITEMS_PER_PAGE * (this.pageNumber);
    this.page = this.products.slice(start, end);
  }
}
