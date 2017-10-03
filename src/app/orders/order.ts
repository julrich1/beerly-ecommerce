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

  constructor() {

  }
}

// orders
// table.increments();
// table.integer("user_id").references("users.id").onDelete("CASCADE");
// table.integer("order_number").notNullable();
// table.string("address1").notNullable();
// table.string("address2");
// table.string("city").notNullable();
// table.string("state").notNullable();
// table.string("zip").notNullable();
// table.string("country").notNullable();
// table.string("phone").notNullable();
// table.string("status");
// table.decimal("tax_percentage");
// table.timestamps(true, true);    

// orders_products
// table.increments();
// table.integer("order_id").references("orders.id").notNullable();
// table.integer("product_id").references("products.id").notNullable();
// table.integer("quantity").notNullable();
// table.decimal("price").notNullable();