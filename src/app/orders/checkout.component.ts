import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

// import { Product } from "./product";

import { ProductService } from "../products/product.service";

// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  // styleUrls: ['./app.component.css']
})
export class CheckoutComponent implements OnInit {
  // private product: Product;

  constructor(
    private productService: ProductService,
    private router: Router    
  ) {}

  ngOnInit(): void {
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.productService.getProduct(+params.get("id")))
    //   .subscribe(product => this.product = product);
  }

  submit(shipForm: NgForm): void {
    console.log(shipForm.value);
    this.router.navigateByUrl("/summary");

  }
}