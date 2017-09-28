export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;

  constructor(id, name, description, price, rating) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.rating = rating;
  }
}