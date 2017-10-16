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
  }
}