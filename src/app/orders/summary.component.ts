import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from "../products/product.service";
import { UserService } from "../users/user.service";

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router    
  ) {}

  ngOnInit(): void {
    if (!this.productService.cart.length) { this.router.navigate(["cart"]); }
  }

  submitOrder(): void {
    this.productService.submitOrder()
      .then((orderNumber) => {
        const link = ['/order', orderNumber];
        this.productService.cart = [];
        this.router.navigate(link);    
      })

  }
}