
exports.up = function(knex, Promise) {
  return knex.schema.createTable("orders_products", (table) => {
    table.increments();
    table.integer("order_id").references("orders.id").notNullable().onDelete("CASCADE");
    table.integer("product_id").references("products.id").notNullable().onDelete("CASCADE");
    table.integer("quantity").notNullable();
    table.decimal("price").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("orders_products");
};
