
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("products").del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
        {id: 1, name: "Elysian Dayglow IPA [16oz]",
          description:
          "A touch of wheat hazes the malt bill, softening this bright and crisp IPA. Dayglow is packed with juicy hops featuring pineapple and tropical fruit flavors and aromas.",
          price: 3.49, rating: 4.5, image_url: "elysiancanfk-1000x1000.JPG", category: "ipas"},
        {id: 2, name: "Lagunitas India Pale ale [22oz]",
          description:
          "Taste focuses on the hops. Floral, piney and citrus all are there. Mouth feel is somewhat light, but still has some nice body. You can pair this beer with: Cuisine (Curried, Thai) Cheese (peppery; Monterey / Pepper Jack, sharp; Blue, Cheddar, pungent; Gorgonzola, Limburger) Meat (Poultry, Fish, Shellfish, Salmon)",
          price: 3.99, rating: 4.0, image_url: "lagunitas-ipa-1000x1000.JPG", category: "ipas"},
        {id: 3, name: "Big Eye IPA [22oz]",
          description:
          "Pours a translucent orange-hued amber with a quarter of an inch of off white head that has great retention. The nose has notes of bready barley malt, birthday cake, pineapple, mango, and grapefruit. The flavor is big and malty up front with a forward, bready, sweet, cupcake-like presence. The hop character follows with a smooth, subtle, citrusy characteristic but then finishes with a strong, citrusy, piny, bitter bite. The hops give notes of grapefruit, pineapple, and pine and have a sweet, earthy, spicy character. The mouthfeel is medium bodied, smooth, and mildly carbonated. You can pair this beer with: Cuisine (Curried, Thai) Cheese (peppery; Monterey / Pepper Jack, sharp; Blue, Cheddar, pungent; Gorgonzola, Limburger) Meat (Poultry, Fish, Shellfish, Salmon)",
          price: 3.99, rating: 3.5, image_url: "ballast-bigeye-1000x1000.JPG", category: "ipas"},
        {id: 4, name: "Go To IPA [12 oz]",
          description:
          "Aroma is jam packed with grapefruit, pine, mango, and green onions. Taste follows close by just more cracker like malts. You can pair this beer with: Cheese (earthy; Camembert, Fontina, sharp; Blue, Cheddar) Meat (Grilled Meat)",
          price: 2.99, rating: 5.0, image_url: "stonegotoipa-1000x1000.JPG", category: "ipas"},        
        {id: 5, name: "Hop Nookie TIPA [22oz]",
          description:
          "This triple IPA is turbo hopped with Amarillo and Chinook. At 11% abv and 100 IBUs, you may want to take a seat in the back and put your feet up! You can pair this beer with: Cheese (sharp; Blue, Cheddar) Meat (Beef, Poultry, Fish)",
          price: 7.99, rating: 4.0, image_url: "kern-river-hop-nookey-triple-ipa-1000x1000.jpg", category: "ipas"},        
        {id: 6, name: "Chimay Grande Reserve [750 ml]", 
          description:
          "If you think that Magnum is just a Chimay Blue in a 150 cl (51 fl.oz.) bottle, you are forgetting one essential fact, for it is important to appreciate that a large volume of beer affects the development of taste in the second fermentation of the beer in the bottle and gives it a fuller and smoother character. A vintage like its little sisters of 33 (11.2 fl.oz.) and 75 cl (25.4 fl.oz.), Magnum Grande Réserve may be conserved in dark conditions for several years. This is how the beer acquires a light and pleasant taste of port. Convivial and festive, the Magnum is a must for the connoisseur who will not forget to serve his beverage at cellar temperature in Gourmet glasses (18 cl/6 fl.oz.). You can pair this beer with: Cuisine (Barbecue) Cheese (sharp; Blue, Cheddar, pungent; Gorgonzola, Limburger) Meat (Beef, Grilled Meat)",
          price: 14.99, rating: 4.0, image_url: "chimay-grandreserve-1000x1000.JPG", category: "belgians"},        
        {id: 7, name: "Duvel [750ml]",
          description:
          "Duvel has a fruity dry aroma, owed to the finest hops, that reminds experts like Michael Jackson of Poire William concerning its bouquet and pallet. Its dry but still alcohol-sweet flavour makes the beer an excellent thirst-quencher, with a pronounced hop aroma. Thanks to the balance between a fine aroma and subtle bitterness, this beer occupies a unique position in the rich Belgian Beer tradition. Duvel is the perfect companion for appetisers, digestives and every other occasion. You can pair this beer with: General (Apéritif, Digestive) Meat (Game, Salmon)",
          price: 10.99, rating: 4.0, image_url: "duvel-1000x1000.JPG", category: "belgians"},        
        {id: 8, name: "St Bernardus Tripel [750ml]",
          description:
          "This beer, with high fermentation, has a pale amber colour and a flowery, fruity taste with a harmonious balance between sweet and sour (8% alcohol content). This beer has a thick and vivid froth and strikes by its balanced taste with a delicate bitterness. You can pair this beer with: Cuisine (Mediterranean) Cheese (sharp; Blue, Cheddar, pungent; Gorgonzola, Limburger) Meat (Pork, Poultry)",
          price: 10.99, rating: 4.0, image_url: "stbernardus-tripel-1000x1000.JPG", category: "belgians"},        
        {id: 9, name: "Unibroue Don De Dieu [750ml]",
          description:
          "Smooth, rich, and creamy; slightly sweet with a warming mix of strength and full-bodied flavour, delicately spiced. You can pair this beer with: General (Apéritif, Digestive) Meat (Game, Salmon)",
          price: 7.99, rating: 4.0, image_url: "dondedieu-triplewheat-1000x1000.JPG", category: "belgians"},        
        {id: 10, name: "Gulden Draak 9000 Quad [750 ml]",
          description:
          "Gulden Draak, lonely at the top for 25 years, now gets company The birthday present: Gulden Draak 9000 Quadruple, an enrichment of the Gulden Draak range. An ode to the past and to the city of (9000) GHENT The Gulden Draak is named after the gilded statue on top of the belltower of Ghent. Such eminent symbol, that has been standing firm for over 6 centuries, deserves equally grand beers. The unsurpassed Gulden Draak as dark tripel of 10,5% alcohol gets, after 25 years of growing success, quite an addition, the Gulden Draak 9000 Quadruple. All features of the Gulden Draak The extremely rich and complex taste sensation and the stable beer head can also be found in the Gulden Draak 9000 Quadruple. The sweet caramel touches, however, are still reserved for the Gulden Draak. With addition of extra malt The new recipe, on basis of 3 different kinds of malt added in a volume of 4 times the content in lager, provide the Gulden Draak 9000 Quadruple with a deep golden amber colour and a fruity scent. Together with the smooth and subtle sweet taste ensures this a wonderfully accomplished bouquet. In line with the traditions of Brewery Van Steenberge Just like the other specialty beers of Brewery Van Steenberge is the Gulden Draak 9000 Quadruple a beer of high fermentation with secondary fermentation. A wine yeast is used for the secondary fermentation, which also contributes to the grandiose taste. You can pair this beer with: Cheese (buttery; Brie, Gouda, Havarti, Swiss, sharp; Blue, Cheddar) General (Digestive) Meat (Beef, Smoked Meat, Game)",
          price: 11.99, rating: 4.0, image_url: "goldendraak-9000-1000x1000.JPG", category: "belgians"},        
        {id: 11, name: "Piraat ale [750ml]",
          description:
          "Piraat is a wickedly rich and rounded brew that packs a mighty punch. The powerful glow builds up from inside. Deep golden with a subtle haze. Lots of hops and malt. Mild sweetness. Reminiscent of bread dough, spices and tropical fruits. You can pair this beer with: Cuisine (Barbecue) Cheese (sharp; Blue, Cheddar, pungent; Gorgonzola, Limburger) Meat (Beef, Grilled Meat)",
          price: 11.99, rating: 4.0, image_url: "piraat-ale-1000x1000.JPG", category: "belgians"},        
        {id: 12, name: "Victory Golden Monkey [750 ml]",
          description:
          "Strong and sensual, this golden, Belgian-style ale glows with goodness. The richness of German malts and Belgian yeast are tempered by a sparkling approach and overall light body. Considerable depth of character with abundant herbal, fruity notes make this one to savor. You can pair this beer with: Cuisine (Mediterranean) Cheese (sharp; Blue, Cheddar, pungent; Gorgonzola, Limburger) Meat (Pork, Poultry)",
          price: 12.99, rating: 4.0, image_url: "victory-goldenmonkey-1000x1000.JPG", category: "belgians"},        
        {id: 13, name: "Trappistes Rochefort 6 [11.2 fl oz]",
          description:
          "This beer, the oldest of the three Rochefort Trappist beers, has the reddish colour of autumn leaves, a soft body and an earthy, herbal palate (a hint of Darjeeling tea), which develops into a deep fruitiness. You can pair this beer with: Cuisine (Barbecue) Cheese (peppery; Monterey / Pepper Jack, sharp; Blue, Cheddar, pungent; Gorgonzola, Limburger) Meat (Game, Grilled Meat, Salmon)",
          price: 6.99, rating: 4.0, image_url: "Beer_9889494D-F462-4911-A723-27FC5017BD30-1000x1000.JPG", category: "belgians"},        
        {id: 14, name: "Brainless On Raspberries [22 oz]",
          description:
          "Hints of raspberry bubble gum flavors from the Belgian yeast and fresh raspberries tease the pallet in this Brainless® offering. You can pair this beer with: salad",
          price: 12.99, rating: 4.0, image_url: "epic-brainless-raspberries-1000x1000.JPG", category: "sours"},        
        {id: 15, name: "Petrus Sour Quad [750ml]",
          description:
          "From the innovators at Brouwerij De Brabandere we have something totally new: a Sour Quad. The Petrus Sour Quad is a limited edition blend of quadruple and 30% Petrus Aged Pale. The quadruple is a complex, dark, malty beer made from 5 different malts. Adding Petrus Aged Pale, pure foeder beer, to the full bodied strong quadruple creates a refreshing and complex taste. You can pair this beer with: Aged Cheeses",
          price: 13.99, rating: 4.0, image_url: "petsourqu-1000x1000.jpg", category: "sours"},        
        {id: 16, name: "Cascade Kriek [750 ml]",
          description:
          "Winter Seasonal. Brewed with 4 types of cherries, aged in oak for one year. Cascade Kriek Ale spends over 6 months of lactic fermentation and aging in small oak barrels. This Belgian Flanders Style Red Ale is refermented with a blend of fresh whole Northwest cherries and then hand bottled. Cascade Kriek Ale is bottle fermented and should be refrigerated or stored at cellar temp and served at 45 to 50 degrees. You can pair this beer with: Cheese (earthy; Camembert, Fontina, sharp; Blue, Cheddar) Meat (Grilled Meat)",
          price: 22.99, rating: 4.0, image_url: "cascade-1000x1000.jpg", category: "sours"},        
        {id: 17, name: "Oude Tart [750ml]",
          description:
          "Oude Tart is our take on a Flanders Style red ale. It has won back to back gold medals in that category at the World Beer Cup (2010 & 2012) as well as a gold medal at the Great American Beer Festival in 2010. This sour red ale ages in oak barrels for anywhere from 6 to 18 months before being carefully blended to taste. The resulting beer is pleasantly sour with hints of leather, dark fruit and toasty oak. You can pair this beer with: Cheese (peppery; Monterey / Pepper Jack, pungent; Gorgonzola, Limburger) General (Salad)",
          price: 14.99, rating: 4.0, image_url: "bruery-oudetart-1000x1000.JPG", category: "sours"},        
        {id: 18, name: "Duchesse De Bourgogne [750ml]",
          description:
          "Bold, clear, reddish mahogany with a decent head and cap leaving behind some lacing. Ruby tinging in the light. Vinegar-astringency and some fruit: pear, cherry, apple. A slight whiff of that woody smell of a basement. Big, fruity and sour, this beer is a delicious mash of sweet and sour cherry and pear flavor. Some heat on the back burner. Puckering, smooth, dry, and a little spicy carbonation. You can pair this beer with: Cheese (earthy; Camembert, Fontina, sharp; Blue, Cheddar) Meat (Grilled Meat)",
          price: 19.99, rating: 4.0, image_url: "duchessedebourgogne-1000x1000.JPG", category: "sours"},        
        {id: 19, name: "Boon Kriek Mariage Parfait [375ml]",
          description:
          "Kriek Mariage Parfait is an Old Style Kriek of exceptional excellence. 400 g of wild cherries per litre are fermented together with a strong Lambic of spontaneous fermentation and aged on 6,200 litre oak foudres (large wooden casks) for 5 to 6 months. Kriek Mariage Parfait is naturally clarified and referments in the bottle. It is unsweetened, unfiltered, unpasteurised and has no artificial flavours, preservatives or colourings added. Brewed in Lembeek, the village that gave Lambic its name. Pour slowly in a flute glass without disturbing the yeast sediment in the bottle and enjoy this epitome of traditional Lambic brewing.",
          price: 10.99, rating: 4.0, image_url: "BMPkriek-1000x1000.JPG", category: "sours"},        
        {id: 20, name: "Cascade Elderberry [750ml]",
          description:
          "This live barrel of NW style sour red ale was initially aged for six months in French oak wine barrels, then additionally aged on elderberries. Sharp wine, dark raisins, red grapes and cereal notes greet you on the nose. Tart dark fruit and grapes on the palate lead to a sparkling crisp dry finish with hints of fresh elderberries and grape skins. You can pair this beer with: Aged Cheeses",
          price: 32.99, rating: 4.0, image_url: "elderberr-1000x1000.jpg", category: "sours"},        
        {id: 21, name: "Wyder's Dry Raspberry [22 oz]",
          description:
          "Sweet raspberry candy flavors pour out of this drink and go straight to your nose. They seem to last an exceedingly long time -- even after the last stip your glass will still have a strong raspberry aroma. This beer is largely crisp and clean, and the sweet raspberry stays primarily in the nose. Raspberry hints come back to finish this beer off, and the sour aspect that accompanies the flavor is perfect. Wyder's suggestion to float this in a rich stout (creating a flavorful black velvet) is certainly a good one; we further suggest you try Wyder's three other flavors. You can pair this beer with: Fruits",
          price: 5.99, rating: 4.0, image_url: "wydrasp-1000x1000.jpg", category: "ciders"},  
        {id: 22, name: "101 Cider House Black Dog [22oz]",
          description:
          "Meet “Black Dog”, the worlds first black cider. A 101 Cider House original that we handcraft with locally grown Blood Oranges, and a natural infusion of freshly picked lavender. We concoct a refreshing herbal citrus punch, before blending in activated charcoal derived from tropical coconuts. The result is velvety smooth black magic, loaded with the worlds most potent detoxifying substance. Your body will thank you.",
          price: 9.99, rating: 4.0, image_url: "blackdog101-1000x1000.jpg", category: "ciders"},  
        {id: 23, name: "101 Cider House Sour Perry [22oz]",
          description:
          "This is NOT your average Perry (aka. Pear Cider). Native yeast fermented to dry and full of farmhouse funk, with a pronounced sour character. Crafted from 100% fresh pressed pears, grown here on the west coast. Sour Perry will leave your palate confused and thirsty for more. Attention all foodies, this is the perfect beverage for Charcuterie and any cheese plate!",
          price: 9.99, rating: 4.0, image_url: "sourperryfk-1000x1000.JPG", category: "ciders"},  
        {id: 24, name: "Ace BlackJack Twenty-One [750 ml]",
          description:
          "This Special Anniversary cider celebrates their 21 years of making ACE ciders in the Sebastopol area. They have taken the local Gravenstein apple, fermented it to 9% abv and then oak aged it in chardonnay barrels before bottling it with more carbonation than their core brands. Only a very limited number of bottles of Blackjack 21 have been made. You can pair this beer with: Fruits",
          price: 15.99, rating: 4.0, image_url: "IMG_0195-1000x1000.JPG", category: "ciders"},  
        {id: 25, name: "Carpe Diem Prestige [750 ml]",
          description:
          "This wine, selected by the Elysée since 1997 and appreciated by former France President Jacques Chirac, is primarily a dessert wine, ideal to accompany fruit tarts.   Apples of this wine are preserved almost 3 months under cover. shriveled at the time of pressing, the sugar content of the wort to the press is exceptionally high). Low alcohol degree of about 3%, care 3 to 5 years. You can pair this beer with: (General) Salads",
          price: 24.99, rating: 4.0, image_url: "carpe-diemprestige-1000x1000.JPG", category: "ciders"},  
        {id: 26, name: "Red Barn Ale [750ml]",
          description:
          "This Farmhouse Ale traces its roots to the small rustic breweries of Southern Belgium. The word Saison comes to us from the French language and it means Season. Lightly spiced with Organic Ginger, Orange Peels, Black Pepper and Grains of Paradise, this brew promises to quench your thirst on the hottest Southern California days or wherever your travels may take you. You can pair this beer with: (General) Salads",
          price: 8.99, rating: 4.0, image_url: "barnale51-1000x1000.jpg", category: "ales"},  
        {id: 27, name: "Kalamazoo Stout [12oz]",
          description:
          "This is a full-bodied stout with plenty of roast flavor as well as hints of molasses and chocolate. Ridiculous amounts of black and caramel malts make this stout smooth, creamy, and utterly opaque. You can pair this beer with: Desserts",
          price: 3.99, rating: 4.0, image_url: "kalamazoo-1000x1000.jpg", category: "ales"},  
        {id: 28, name: "St. Peter's Dark Sorgham Beer [500ml]",
          description:
          "Suffolk-grown, Sovereign bittering hops provide the floral notes for this full bodied beer, which is Gluten free and suitable for coeliacs. You can pair this beer with: Cuisine (Curried, Thai) Cheese (peppery; Monterey / Pepper Jack, sharp; Blue, Cheddar, pungent; Gorgonzola, Limburger) Meat (Poultry, Fish, Shellfish, Salmon)",
          price: 6.99, rating: 4.0, image_url: "sssss-1000x1000.jpg", category: "ales"},  
        {id: 29, name: "B. Nektar Necromangocon [500 ML]",
          description:
          "Many years ago, a mysterious book was discovered by a group of friends in a Ferndale, MI basement. A translation of its contents revealed the recipe for an ancient beverage using mango juice, honey, and black pepper. What they didn’t realize was that creating the beverage had dire consequences. Stricken by fear after its compleation, the friends tried to contain the terrifying forces into this very bottle. Once opened, however, no one can say for sure if it can be conquered. Defend your soul or join us... You can pair this beer with: (General) Salads",
          price: 9.99, rating: 4.0, image_url: "Beer_F0126B84-0996-4819-8C3F-F3664E7145EE-1000x1000.JPG", category: "ales"},  

      ]);
    });
};