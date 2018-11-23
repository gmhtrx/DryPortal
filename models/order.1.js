const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    customerFirst: {
        type: String,
        required: true
    },
    customerLast: {
        type: String,
        required: true
    },
    customerAddress: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true
    },
    customerPhone: {
        type: Number,
        required: true
    },
    pickedup: {
        type: Boolean,
        required: true,
        default: false
    },
    delivered: {
        type: Boolean,
        required: true,
        default: false
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    items: {
        type: String,
        
    }
});

module.exports = Order = mongoose.model("order", OrderSchema)
