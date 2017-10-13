import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

import { Product } from "./product";

import { ProductService } from "./product.service";
import { UserService } from "../users/user.service";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  private product: Product;
  private quantities: Array<number>;
  private quantity: any = "1";
  private adding = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    this.quantities = new Array(100).fill(0);
    this.quantities = this.quantities.map((val, index) => index+1);
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.productService.getProduct(+params.get("id")))
      .subscribe(product => this.product = product);
  }

  add(product): void {
    if (this.userService.userIsLoggedIn) {
      this.adding = true;      
      this.productService.addToCart(product, parseInt(this.quantity)).then(() => {
        //TO-DO: Show added to cart notification
        this.adding = false;
      });
    }
    else {
      this.router.navigateByUrl("login");
    }
  }
}