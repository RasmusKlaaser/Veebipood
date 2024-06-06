const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rasmuskuusmaa:sPubZ7j7PralbHWm@cluster0.mbfadvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const ProductModel = require('./models/product'); 
const mongoose = require('mongoose')
const express = require('express')
const app = express()

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


app.use(express.json());

app.get("/api", (req, res) => {
    res.json({"test": "palun toota"})
})
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
app.listen(5000, () => {
    console.log('server 5000')
})