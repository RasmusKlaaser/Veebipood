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
    },
    CardInfo: {
        type: String,
        trim: true
    },
    expirationDate: {
        type: String,
        trim: true
    },
    CVC: {
        type: String,
        trim: true
    },

}, {
    timestamps: true 
});

const orderModel = mongoose.model('order', orderSchema);

module.exports = orderModel;
