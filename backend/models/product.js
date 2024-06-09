const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
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
    price: {
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

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
