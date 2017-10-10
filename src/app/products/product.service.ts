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
  public cartTotal: number = 0;

  constructor(
    private http: Http,
    private userService: UserService
  ) {}

  getProducts(): Promise<Product[]> {
    return this.http.get(this.productsUrl, {headers: this.headers})
      .toPromise()
      .then((response) => {
        return response.json().reduce((acc, product) => {
          acc.push(new Product(product.id, product.name, product.description, product.price, product.rating, 1, product.image_url));

          return acc;
        }, []);
      })
  }

  getProductsByCategory(category: string): Promise<Product[]> {
    return this.http.get(`${this.productsUrl}/category/${category}`, {headers: this.headers})
      .toPromise()
      .then((response) => {
        if (Array.isArray(response.json())) {
          return response.json().reduce((acc, product) => {
            acc.push(new Product(product.id, product.name, product.description, product.price, product.rating, 1, product.image_url));
  
            return acc;
          }, []);
        }
        else {
          return [];
        }
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
        return new Product(product.id, product.name, product.description, product.price, product.rating, 1, product.image_url);
      })
  }

  getHighlightProducts(): Array<Product> {
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

  addToCart(product, quantity): Promise<void> {
    const newProduct = Object.assign({}, product, {quantity: quantity});

    return this.http.post(`${this.cartUrl}`, newProduct, {headers: this.headers})
      .toPromise()
      .then((response) => {        
        let found = false;

        for (let p of this.cart) {
          if (p.id === newProduct.id) {
            p.quantity += newProduct.quantity;
            found = true;
          }
        }

        if (!found) { this.cart.push(newProduct); }

        this.setCartTotal();
      })
  }

  getCart(): Promise<void> {
    return this.http.get(`${this.cartUrl}`, {headers: this.headers})
      .toPromise()
      .then((response) => {
        const products = response.json();
        this.cart = products.reduce((acc, product) => {
          acc.push(new Product(product.id, product.name, product.description, product.price, product.rating, 1, product.image_url));
          return acc;
        }, []);
        this.setCartTotal();
      })
  }

  setCartTotal(): void {
    const total = this.cart.reduce((acc, product) => {
      acc += product.price * product.quantity;
      return acc;
    }, 0)

    this.cartTotal = parseFloat(total.toFixed(2));
  }

  deleteFromCart(product): Promise<void> {
    return this.http.delete(`${this.cartUrl}/${product.id}`, {headers: this.headers})
      .toPromise()
      .then((result) => {
        const products = result.json();
        this.cart = products.reduce((acc, product) => {
          acc.push(new Product(product.id, product.name, product.description, product.price, product.rating, 1, product.image_url));
          return acc;
        }, []);
        this.setCartTotal();
      })
  }

  submitOrder(): Promise<number> {
    // this.userService.user.address1 = "1 main st";
    // this.userService.user.address2 = "Apt 1";
    // this.userService.user.zip = 98122;
    // this.userService.user.phone = 5555555555;
    // this.userService.user.country = "USA";
    // this.userService.user.state = "Washington";

    const orderDetail = {
      address1: this.userService.user.address1,
      address2: this.userService.user.address2,
      zip: this.userService.user.zip,
      phone: this.userService.user.phone || 5555555555,
      country: this.userService.user.country || "USA",
      state: this.userService.user.state
    };

    const order = { cart: this.cart, user: orderDetail };

    return this.http.post(`${this.orderUrl}`, order, {headers: this.headers})
      .toPromise()
      .then((result) => {
        console.log(result.json());
        return result.json().orderId;
      });
  }

  getOrders(): Promise<any> {
    return this.http.get(`${this.orderUrl}`, {headers: this.headers})
      .toPromise()
      .then((response) => {
        console.log(response);
        return response;
      })
  }

  getOrder(id: number): Promise<any> {
    return this.http.get(`${this.orderUrl}/${id}`, {headers: this.headers})
      .toPromise()
      .then((response) => {
        return response;
      })
  }
}