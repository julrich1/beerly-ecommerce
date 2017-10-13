import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Order } from "./order";

import { ProductService } from "../products/product.service";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  private order: Order = new Order();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router    
  ) {}  

  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.productService.getOrder(+params.get("id")))
    .subscribe((order) => {
      console.log("ORDER:", order.json());
      this.order = order.json();

      this.generateOrderTotals();
    });
  }

  private generateOrderTotals() {
    this.order.subtotal = this.order.products.reduce((acc, product) => {
      acc += product.price * product.quantity;
      return acc;
    }, 0);
  }

  private goBack() {
    this.location.back();
  }

}