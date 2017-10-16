import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

import { Product } from "./product";

import { ProductService } from "./product.service";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'product-list',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  products: Array<Product> = [];
  private searchTerms: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.productService.search(params.get("searchTerms")))
    .subscribe(result => {
      this.products = result;
    });
  }
}
