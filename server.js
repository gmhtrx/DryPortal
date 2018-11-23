const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan")
const sgMail = require('@sendgrid/mail');
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

// Send every request to the React app
// Define any API routes before this runs
app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dryportal");

//sendgrid api key
sgMail.setApiKey('____YOUR___API__KEY');

//utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!
app.use(cors()); 

app.get('/send-email', (req,res) => {
    
  //Get Variables from query string in the search bar
  const { recipient, sender, topic, text } = req.query; 

  //Sendgrid Data Requirements
  const msg = {
      to: recipient, 
      from: sender,
      subject: topic,
      text: text,
  }

  //Send Email
  sgMail.send(msg)
  .then((msg) => console.log(text));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
