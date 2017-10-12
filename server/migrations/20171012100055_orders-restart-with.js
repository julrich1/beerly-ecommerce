
exports.up = function(knex, Promise) {
  return knex.schema.raw("ALTER SEQUENCE orders_id_seq RESTART WITH 100000");
};

exports.down = function(knex, Promise) {
  
};
