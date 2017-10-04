
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("products").del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
        {id: 1, name: "Cascade Sour", description: "A wonderful peach sour by Cascade Brewing", price: 15.99, rating: 4.5, image_url: "beer.jpg", category: "sours"},
        {id: 2, name: "New Belgium Fat Tire", description: "The classic, Fat Tire", price: 6.99, rating: 4.0, image_url: "beer.jpg", category: "belgians"},
        {id: 3, name: "Ghostfish IPA", description: "A gluten free IPA made by Ghostfish", price: 4.99, rating: 3.5, image_url: "beer.jpg", category: "ipas"},
        {id: 4, name: "DeGarde Sour", description: "DeGarde sour fruit flavored", price: 12.99, rating: 5.0, image_url: "beer.jpg", category: "sours"},        
        {id: 5, name: "Alvinne Phi", description: "Blonde sour ale with balance of sweetness and sourness", price: 7.99, rating: 4.0, image_url: "beer.jpg", category: "belgians"},        
        {id: 6, name: "Alvinne Phi", description: "Blonde sour ale with balance of sweetness and sourness", price: 7.99, rating: 4.0, image_url: "beer.jpg", category: "belgians"},        
        {id: 7, name: "Alvinne Phi", description: "Blonde sour ale with balance of sweetness and sourness", price: 7.99, rating: 4.0, image_url: "beer.jpg", category: "belgians"},        
        {id: 8, name: "Alvinne Phi", description: "Blonde sour ale with balance of sweetness and sourness", price: 7.99, rating: 4.0, image_url: "beer.jpg", category: "belgians"},        
        {id: 9, name: "Alvinne Phi", description: "Blonde sour ale with balance of sweetness and sourness", price: 7.99, rating: 4.0, image_url: "beer.jpg", category: "belgians"},        
        {id: 10, name: "Alvinne Phi", description: "Blonde sour ale with balance of sweetness and sourness", price: 7.99, rating: 4.0, image_url: "beer.jpg", category: "belgians"},        
        {id: 11, name: "Alvinne Phi", description: "Blonde sour ale with balance of sweetness and sourness", price: 7.99, rating: 4.0, image_url: "beer.jpg", category: "belgians"},        
        {id: 12, name: "Alvinne Phi", description: "Blonde sour ale with balance of sweetness and sourness", price: 7.99, rating: 4.0, image_url: "beer.jpg", category: "belgians"},        
        {id: 13, name: "Alvinne Phi", description: "Blonde sour ale with balance of sweetness and sourness", price: 7.99, rating: 4.0, image_url: "beer.jpg", category: "belgians"},        
        {id: 14, name: "Alvinne Phi", description: "Blonde sour ale with balance of sweetness and sourness", price: 7.99, rating: 4.0, image_url: "beer.jpg", category: "belgians"},        
        {id: 15, name: "Alvinne Phi", description: "Blonde sour ale with balance of sweetness and sourness", price: 7.99, rating: 4.0, image_url: "beer.jpg", category: "belgians"},        
        {id: 16, name: "Alvinne Phi", description: "Blonde sour ale with balance of sweetness and sourness", price: 7.99, rating: 4.0, image_url: "beer.jpg", category: "belgians"},        
        {id: 17, name: "Alvinne Phi", description: "Blonde sour ale with balance of sweetness and sourness", price: 7.99, rating: 4.0, image_url: "beer.jpg", category: "belgians"},        
        {id: 18, name: "Alvinne Phi", description: "Blonde sour ale with balance of sweetness and sourness", price: 7.99, rating: 4.0, image_url: "beer.jpg", category: "belgians"},        
        {id: 19, name: "Alvinne Phi", description: "Blonde sour ale with balance of sweetness and sourness", price: 7.99, rating: 4.0, image_url: "beer.jpg", category: "belgians"},        
        {id: 20, name: "Alvinne Phi", description: "Blonde sour ale with balance of sweetness and sourness", price: 7.99, rating: 4.0, image_url: "beer.jpg", category: "belgians"},        
        
      ]);
    });
};