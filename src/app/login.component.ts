import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  // styleUrls: ['./app.component.css']
})
export class LoginComponent {
  onSubmit(e): void {
    console.log("Submitted");
  }
  // products: Array<Product> = [];
  // constructor(private productService: ProductService) {}

  // ngOnInit() {
  //   this.products = this.productService.getHighlightProducts();
  // }
  // @Input()
  // product: object = {};
}