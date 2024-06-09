const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rasmuskuusmaa:sPubZ7j7PralbHWm@cluster0.mbfadvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const ProductModel = require('./models/product'); 
const mongoose = require('mongoose')
const express = require('express');
const app = express()

const corsOptions = {origin: 'http://localhost:3000'}

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit process if unable to connect to database
});

// this code adds products to the database everytime it runs
// after adding the product comment the code out
/*
const newProduct = new ProductModel({
    id: 4,
    name: 'product 4',
    price: 299.99,
    quantity: 139
});

// Save the product instance to the database
newProduct.save()
    .then(savedProduct => {
        console.log('Product saved successfully:', savedProduct);
    })
    .catch(err => {
        console.error(err);
    });

*/
const productId = '66621b1aefd89bf86159d491';
ProductModel.findById(productId)
    .then(product => {
        if (product) {
            console.log('product found:', product);
        } else {
            console.log('product not fount')
        }
    })
    .catch(err => {
        console.error('no retrive', err);
    });


app.use(express.json());
app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({"test": "palun toota"})
})
app.get('/api/products', async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.json(products);
    } catch (error) {
        console.error('error', error);
        res.status(500).json({ message: 'internal server error'});
    }
});

app.post('/api/data', async (req, res) => {
    try {
        const newData = req.body;
    
        const result = await ProductModel.create(newData);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
app.put('/api/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedProduct = req.body;
        
        const result = await ProductModel.findByIdAndUpdate(productId, updatedProduct, { new: true });
        
        if (!result) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(result);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(5000, () => {
    console.log('server 5000')
})