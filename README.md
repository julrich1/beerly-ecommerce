# Beerly - An e-commerce site developed as a proof of concept

* Why create yet another e-commerce platform?
  - I wanted to showcase my attempts at learning a brand new (to me) platform and include functionality that  Building a site that would be a good example of a single page application, using a brand new technology - Angular 4.
* What technologies did you use?
  - Angular 4, PostgreSQL, NodeJS + Express
  - CSS Grid
* What problems did you have to overcome?
  - Routing posed the biggest issues, especially when checking if a user is currently logged in. I ended up leveraging resolvers to query the user status before each page load, but this process could probably be handled more efficiently.