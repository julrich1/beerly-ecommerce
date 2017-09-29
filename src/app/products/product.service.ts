import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Product } from './product';

@Injectable()
export class ProductService {
  private productsUrl: string = "api/products";
  private headers = new Headers({'Content-Type': 'application/json'});
  public cart: Array<Product> = [];

  constructor(private http: Http) {}

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

  addToCart(product): void {
    this.cart.push(product);
  }
}