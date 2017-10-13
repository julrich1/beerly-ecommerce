import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from "./order";

import { ProductService } from "../products/product.service";
import { UserService } from "../users/user.service";

@Component({
  selector: 'order',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  private orders: Array<Order>;

  constructor(
    private productService: ProductService,
    private userService: UserService,    
    private router: Router    
  ) {}

  ngOnInit(): void {
    if (!this.userService.userIsLoggedIn) {
      this.router.navigateByUrl("login");
    }
    else {
      this.productService.getOrders()
        .then((result) => { 
          this.orders = result.json();
        });
    }
  }
}