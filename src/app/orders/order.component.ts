import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';

// import { Product } from "./product";

// import { ProductService } from "./product.service";

// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  // styleUrls: ['./app.component.css']
})
export class OrderComponent implements OnInit {
  // private product: Product;

  constructor(
    // private productService: ProductService,
    // private router: Router    
  ) {}

  ngOnInit(): void {
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.productService.getProduct(+params.get("id")))
    //   .subscribe(product => this.product = product);
  }

  // submit(shipForm: NgForm): void {
  //   console.log(shipForm.value);
  //   this.router.navigateByUrl("/summary");

  // }
}