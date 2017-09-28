import { Component, Input } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  // styleUrls: ['./app.component.css']
})
export class ProductComponent {
  @Input()
  product: object = {};
}