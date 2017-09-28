module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/e-commerce_dev"
  },
  test: {
    client: "pg",
    connection: "postgres://localhost/e-commerce_test"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};