
exports.up = function(knex, Promise) {
  return knex.schema.createTable("orders", (table) => {
    table.increments();
    table.integer("user_id").references("users.id").onDelete("CASCADE");
    table.bigint("order_number").notNullable();
    table.string("address1").notNullable();
    table.string("address2");
    table.string("city").notNullable();
    table.string("state").notNullable();
    table.string("zip").notNullable();
    table.string("country").notNullable();
    table.string("phone").notNullable();
    table.string("status");
    table.decimal("tax_percentage");
    table.decimal("shipping_total");    
    table.timestamps(true, true);    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("orders");
};
