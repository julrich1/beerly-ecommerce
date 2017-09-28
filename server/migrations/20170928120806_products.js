
exports.up = function(knex, Promise) {
  return knex.schema.createTable("products", (table) => {
    table.increments();
    table.string("name").notNullable();
    table.text("description");
    table.decimal("price", 14, 2).notNullable();
    table.decimal("rating");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("products");
};
