
exports.up = function(knex, Promise) {
  return knex.schema.createTable("carts", (table) => {
    table.increments();
    table.integer("user_id").references("users.id");
    table.integer("product_id").references("products.id");
    // table.integer("cart_id");
    table.integer("quantity");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("carts");
};
