import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { UserService } from "./user.service";
import { ProductService } from "../products/product.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private productService: ProductService,
    private location: Location
  ) {}

  onSubmit(form: NgForm): void {
    this.userService.login(form.value).then((result) => {
      this.productService.getCart().then((result) => {
        this.location.back();
      })
    });
  }

  ngOnInit(): void {
    this.userService.isLoggedIn().then((res) => {
      console.log(res);
    })
  }
  // products: Array<Product> = [];
  // constructor(private productService: ProductService) {}

  // ngOnInit() {
  //   this.products = this.productService.getHighlightProducts();
  // }
  // @Input()
  // product: object = {};
}