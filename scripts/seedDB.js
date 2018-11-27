const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dryportal"
);

const itemSeed = [
  {
    name: "Dress shirts",
    price: 6,
    image: "/itempics/shirts.jpg"
  },
  {
    name: "Pants",
    price: 6,
    image: "/itempics/pants.jpg"
  },
  {
    name: "Dress",
    price: 12,
    image: "/itempics/dress.jpg"
  },
  {
    name: "Jackets",
    price: 6,
    image: "/itempics/jacket.jpg"
  },
  {
    name: "Coat",
    price: 18,
    image: "/itempics/coat.jpg"
  },
  {
    name: "Two Piece Suits",
    price: 12,
    image: "/itempics/suits.jpg"
  },
  {
    name: "Blouse",
    price: 6,
    image: "/itempics/blouse.jpg"
  },
  {
    name: "Sweater",
    price: 6,
    image: "/itempics/sweater.jpg"
  },
  {
    name: "Tie",
    price: 6,
    image: "/itempics/tie.jpg"
  },
  {
    name: "Scarf",
    price: 6,
    image: "/itempics/scarf.jpg"
  }, 
  {
    name: "Gloves",
    price: 5,
    image: "/itempics/gloves.jpg"
  }
];

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
