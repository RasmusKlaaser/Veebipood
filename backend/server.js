const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"test": "palun toota"})
})

app.listen(5000, () => {
    console.log('server 5000')
})