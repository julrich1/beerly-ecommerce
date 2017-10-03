const knex = require("../knex");

function clearCart(userId) {
  knex("carts").where("user_id", userId).delete()
    .then((result) => {
      return true;
    });
}

module.exports = clearCart;