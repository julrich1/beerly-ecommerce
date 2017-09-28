
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("firstname").notNullable();
    table.string("lastname").notNullable();
    table.string("email").notNullable().unique();
    table.string("hashed_password").notNullable();
    table.string("address1");
    table.string("address2");
    table.string("city");
    table.string("state");
    table.string("zip");
    table.string("country");
    table.string("phone");
    table.boolean("is_admin").notNullable();
    table.integer("cart_id");
    table.timestamps(true, true);    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
