import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';

import { Order } from "./order";

import { ProductService } from "../products/product.service";

// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'order',
  templateUrl: './order-history.component.html',
  // styleUrls: ['./app.component.css']
})
export class OrderHistoryComponent implements OnInit {
  // private product: Product;
  private orders: Array<Order>;

  constructor(
    private productService: ProductService,
    // private router: Router    
  ) {}

  ngOnInit(): void {
    this.productService.getOrders()
      .then((result) => { 
        console.log(result);
        this.orders = result.json();
        console.log(this.orders);
      });
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.productService.getProduct(+params.get("id")))
    //   .subscribe(product => this.product = product);
  }

  // submit(shipForm: NgForm): void {
  //   console.log(shipForm.value);
  //   this.router.navigateByUrl("/summary");

  // }
}