var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new DryPortalSchema object
var DryPortalSchema = new Schema({
  clouths: {
    type: String
  },
  date: {
    type: Date
  },
  orders:{
    type: String
  }
});

// This creates our model from the above schema, using mongoose's model method
var DryPortal = mongoose.model("DryPortal", DryPortalSchema);

// Export the DryPortal model
module.exports = DryPortal;