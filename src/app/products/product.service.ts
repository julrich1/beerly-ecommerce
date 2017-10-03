import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Product } from './product';

import { UserService } from '../users/user.service';

@Injectable()
export class ProductService {
  private productsUrl: string = "api/products";
  private cartUrl: string = "api/cart";  
  private orderUrl: string = "api/orders";

  private headers = new Headers({'Content-Type': 'application/json'});

  public cart: Array<Product> = [];

  constructor(
    private http: Http,
    private userService: UserService
  ) {}

  getProducts(): Promise<Product[]> {
    return this.http.get(this.productsUrl, {headers: this.headers})
      .toPromise()
      .then((response) => {
        return response.json();
      })
  }

  getProduct(id): Promise<Product> {
    return this.http.get(`${this.productsUrl}/${id}`, {headers: this.headers})
      .toPromise()
      .then((response) => {
        console.log(response.json());
        const product: any = response.json();
        console.log(product);
        // return new Product(1,"asdf", "asdf", 5.00, 4);
        return new Product(product.id, product.name, product.description, product.price, product.rating);
      })
  }

  getHighlightProducts(): Product[] {
    const result = [];

    this.getProducts().then((products) => {
      for (let i = 0; i < 4; i++) {
        let random = Math.floor(Math.random() * (products.length - 0)) + 0;
        result.push(products[random]);
        products.splice(random, 1);
      }
    });    

    return result;
  }

  addToCart(product): Promise<void> {
    return this.http.post(`${this.cartUrl}`, product, {headers: this.headers})
      .toPromise()
      .then((response) => {
        console.log("product added");
        this.cart.push(product);        
      })
  }

  getCart(): Promise<void> {
    return this.http.get(`${this.cartUrl}`, {headers: this.headers})
      .toPromise()
      .then((response) => {
        console.log(response.json());
        const products = response.json();
        this.cart = products.reduce((acc, product) => {
          acc.push(product);
          return acc;
        }, []);
      })
  }

  deleteFromCart(product): Promise<void> {
    return this.http.delete(`${this.cartUrl}/${product.id}`, {headers: this.headers})
      .toPromise()
      .then((result) => {
        const products = result.json();
        this.cart = products.reduce((acc, product) => {
          acc.push(product);
          return acc;
        }, []);

      })
  }

  submitOrder(): Promise<void> {
    this.userService.user.address1 = "1 main st";
    this.userService.user.address2 = "Apt 1";
    this.userService.user.zip = 98122;
    this.userService.user.phone = 5555555555;
    this.userService.user.country = "USA";
    this.userService.user.state = "Washington";

    const order = { cart: this.cart, user: this.userService.user };

    return this.http.post(`${this.orderUrl}`, order, {headers: this.headers})
      .toPromise()
      .then((result) => {
        console.log(result);
      });
  }

  getOrders(): Promise<any[]> {
    return this.http.get(`${this.orderUrl}`, {headers: this.headers})
      .toPromise()
      .then((response) => {
        console.log(response);
        return [];
      })
  }
}