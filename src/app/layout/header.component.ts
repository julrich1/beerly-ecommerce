import { Component } from '@angular/core';

import { ProductService } from "../products/product.service";
import { UserService } from "../users/user.service";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private userService: UserService,
    private productService: ProductService    
  ) {}
}