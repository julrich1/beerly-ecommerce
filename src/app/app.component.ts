import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// import { UserService } from "./users/user.service";
// import { ProductService } from "./products/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  constructor(
    // private userService: UserService,
    // private productService: ProductService,
    // private router: Router
  ) {}

  ngOnInit(): void {
    // this.userService.isLoggedIn().then((loggedIn) => {
    //   if (loggedIn) {
    //     this.productService.getCart();
    //   }
    // });
  }
}
