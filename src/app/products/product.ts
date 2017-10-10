export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  quantity: number;
  image: string;

  constructor(id, name, description, price, rating, quantity, image) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.rating = rating;
    this.quantity = quantity;
    this.image = image;
  }
}