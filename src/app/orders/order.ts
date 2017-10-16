export class Order {
  userId: number;
  orderNumber: number;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  phone: number;
  status: "Ordered";
  subtotal: number;
  products: Array<any>;
  tax: number;
  shipping: number;
  total: number;

  constructor() {

  }
}