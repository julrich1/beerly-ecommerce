import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from "../products/product.service";
import { UserService } from "../users/user.service";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private searchString = "";

  constructor(
    private userService: UserService,
    private productService: ProductService,
    private router: Router    
  ) {}

  logout(): void {
    this.userService.logout().then((response) => {
      this.productService.cart = [];
      this.router.navigateByUrl("/");
    })
  }

  search() {
    if (this.searchString) {
      this.router.navigate(["/search", this.searchString]);
      this.searchString = "";
    }
  }
}