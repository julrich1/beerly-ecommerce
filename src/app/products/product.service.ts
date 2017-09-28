import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Product } from './product';

const productsList = [
  new Product(1, "Pike's Pale", "Delicious", 5.00, 2),
  new Product(2, "Belgain Pale", "Amazing", 4.50, 3),
  new Product(2, "Another Pale", "Amazing", 4.50, 3),
  new Product(2, "Third Pale", "Amazing", 4.50, 3),
  new Product(2, "Some Sour", "Amazing", 4.50, 3),
  new Product(2, "Another Sour", "Amazing", 4.50, 3),
  new Product(2, "Bitter", "Amazing", 4.50, 3)
]

@Injectable()
export class ProductService {
  
  getProducts(): Product[] {
    return productsList;
  }

  getHighlightProducts(): Product[] {
    const productsCopy = [...productsList];
    const result = [];

    for (let i = 0; i < 4; i++) {
      let random = Math.floor(Math.random() * (productsCopy.length - 0)) + 0;
      result.push(productsCopy[random]);
      productsCopy.splice(random, 1);
    }

    return result;
  }
}