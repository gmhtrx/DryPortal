const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    customerEmail: {
        type: String,
        required: true
    }
});

module.exports = Order = mongoose.model("order", OrderSchema)
