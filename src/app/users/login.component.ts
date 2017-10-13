import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

import { UserService } from "./user.service";
import { ProductService } from "../products/product.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private submitted = false;

  constructor(
    private userService: UserService,
    private productService: ProductService,
    private location: Location,
    private router: Router
  ) {}

  onSubmit(form: NgForm): void {
    this.submitted = true;
    
    this.userService.login(form.value).then((result) => {
      console.log("RESULT: ", result);
      if (result === false) {
        //Show error here
        console.log("There was an error");
        this.submitted = false;
      }
      else {
        this.productService.getCart().then((result) => {
          this.location.back();
        })
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  ngOnInit(): void {
    if (this.userService.userIsLoggedIn) {
      this.router.navigate(["home"]);
    }
    // this.userService.isLoggedIn().then((res) => {
    //   console.log(res);
    // })
  }
  // products: Array<Product> = [];
  // constructor(private productService: ProductService) {}

  // ngOnInit() {
  //   this.products = this.productService.getHighlightProducts();
  // }
  // @Input()
  // product: object = {};
}