import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-display',
  templateUrl: './product-display.component.html',
  // styleUrls: ['./app.component.css']
})
export class ProductDisplayComponent {
  @Input()
  product: object = {};
}