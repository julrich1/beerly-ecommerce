import { Component, OnInit } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// import { Product } from "./product";

import { ProductService } from "../products/product.service";
import { UserService } from "../users/user.service";


// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  private states: Array<string> = ['Select state','Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
  
  constructor(
    private productService: ProductService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().then(() => {
      if (!this.userService.user.state) {
        this.userService.user.state = "Select state";
        console.log(this.userService.user.state);
      }
    })
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.productService.getProduct(+params.get("id")))
    //   .subscribe(product => this.product = product);
  }

  submit(shipForm: NgForm): void {
    console.log(shipForm.value);
    
    if (shipForm.value.default) {
      const user = shipForm.value;
      user.id = this.userService.user.id;
      delete user.default;

      this.userService.updateUser(user)
        .then((result) => {
          this.router.navigateByUrl("/summary");
        });
    }
    else {
      this.router.navigateByUrl("/summary");
    }

  }
}