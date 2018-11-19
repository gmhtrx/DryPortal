const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan")

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(logger('dev'));
// Send every request to the React app
// Define any API routes before this runs
app.use(routes);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({'extended':'false'}));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dryportal");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
