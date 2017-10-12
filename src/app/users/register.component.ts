import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from "./user.service";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor(private userService: UserService,
              private router: Router
             ) {}

  onSubmit(form: NgForm): void {
    this.userService.register(form.value).then((response) => {
      this.userService.isLoggedIn().then(() => {
        this.router.navigate(["home"]);
      });
    })
    .catch((err) => {
      console.log("There was an error in registration.")
    });
  }
  // products: Array<Product> = [];
  // constructor(private productService: ProductService) {}

  // ngOnInit() {
  //   this.products = this.productService.getHighlightProducts();
  // }
  // @Input()
  // product: object = {};
}