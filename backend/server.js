const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rasmuskuusmaa:sPubZ7j7PralbHWm@cluster0.mbfadvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const ChannelModel = require('./models/channel'); 
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



app.use(express.json());

app.get("/api", (req, res) => {
    res.json({"test": "palun toota"})
})
app.post('/api/data', async (req, res) => {
    try {
        const newData = req.body;
    
        const result = await ChannelModel.create(newData);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
app.listen(5000, () => {
    console.log('server 5000')
})