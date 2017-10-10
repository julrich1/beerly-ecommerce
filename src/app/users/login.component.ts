import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { UserService } from "./user.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  // styleUrls: ['./app.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private location: Location
  ) {}

  onSubmit(form: NgForm): void {
    this.userService.login(form.value).then((result) => {      
      console.log(result);
      this.location.back();
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