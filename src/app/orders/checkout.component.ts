import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

// import { Product } from "./product";

import { ProductService } from "../products/product.service";
import { UserService } from "../users/user.service";


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
    private router: Router,
    private userService: UserService 
  ) {}

  ngOnInit(): void {
    this.userService.getUser();
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.productService.getProduct(+params.get("id")))
    //   .subscribe(product => this.product = product);
  }

  submit(shipForm: NgForm): void {
    console.log(shipForm.value);
    
    if (shipForm.value.default) {
      const user = shipForm.value;
      user.id = this.userService.user.id;
      delete user.default;

      this.userService.updateUser(user)
        .then((result) => {
          this.router.navigateByUrl("/summary");
        });
    }
    else {
      this.router.navigateByUrl("/summary");
    }

  }
}