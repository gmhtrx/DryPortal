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
  },
  {
    name: "pants",
    price: 6
  },
  {
    name: "Dress",
    price: 12
  },
  {
    name: "Jackets",
    price: 6
  },
  {
    name: "Coat",
    price: 18
  },
  {
    name: "Two piece coat",
    price: 12
  },
  {
    name: "Blouse",
    price: 6
  },
  {
    name: "Sweater",
    price: 6
  },
  {
    name: "Tie",
    price: 6
  },
  {
    name: "Scarf",
    price: 6
  }, 
  {
    name: "Gloves",
    price: 5
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
