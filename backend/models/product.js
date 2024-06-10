const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    image: {
        type: String,
        required: false
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
