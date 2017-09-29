import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from "./user.service";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  // styleUrls: ['./app.component.css']
})

export class RegisterComponent {
  constructor(private userService: UserService) {}

  onSubmit(form: NgForm): void {
    console.log("Submitted: ", form);
    this.userService.register(form.value);
  }
  // products: Array<Product> = [];
  // constructor(private productService: ProductService) {}

  // ngOnInit() {
  //   this.products = this.productService.getHighlightProducts();
  // }
  // @Input()
  // product: object = {};
}