import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  // styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Array<string> = ["Product 1", "Product 2", "Product 3"];
}
