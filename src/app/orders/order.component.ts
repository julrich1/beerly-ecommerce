import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

// import { Router } from '@angular/router';

import { Order } from "./order";

import { ProductService } from "../products/product.service";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  // styleUrls: ['./app.component.css']
})
export class OrderComponent implements OnInit {
  // private product: Product;
  private order: Order = new Order();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
    // private router: Router    
  ) {}

  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.productService.getOrder(+params.get("id")))
    .subscribe((order) => {
      console.log("ORDER:", order.json());
      this.order = order.json();
    });

    // this.productService.getOrder(11)
    //   .then((response) => {
    //     console.log(response);
        // this.order = response.json();
        
      // })
  }

  // submit(shipForm: NgForm): void {
  //   console.log(shipForm.value);
  //   this.router.navigateByUrl("/summary");

  // }
}