Live version of the site: http://beerly-app.herokuapp.com/ (login: test@test.com, password: test)

# Beerly - An e-commerce site developed as a proof of concept

* Why create yet another e-commerce platform?
  - I wanted to showcase my attempts at learning a brand new (to me) platform and include functionality that  Building a site that would be a good example of a single page application, using a brand new technology - Angular 4.
  - My weakest point is in design, so another area of focus was spending some real time on making the site look good. I wanted to build everything from scratch without using a CSS framework, so I leveraged CSS grid, which was also a new technology for me.
* What technologies did you use?
  - Angular 4, PostgreSQL, NodeJS + Express
  - CSS Grid
* What problems did you have to overcome?
  - Routing posed the biggest issues, especially when checking if a user is currently logged in. I ended up leveraging resolvers to query the user status before each page load, but this process could probably be handled more efficiently.
  - Angular 4 is just different enough from AngularJS that it wasn't easy enough to jump right into. I ending up spending a couple days learning as much about the platform as possible.