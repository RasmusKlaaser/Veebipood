const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cart: {
        type: String,
    },
    total: {
        type: Number,
    },
    email: {
        type:String,
        Trim: true
    }
}, {
    timestamps: true 
});

const orderModel = mongoose.model('order', orderSchema);

module.exports = orderModel;
