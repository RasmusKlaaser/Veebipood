const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true, 
        trim: true
    },
    cost: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true   
    }
}, {
    timestamps: true 
});

const cartModel = mongoose.model('cart', cartSchema);

module.exports = cartModel;
