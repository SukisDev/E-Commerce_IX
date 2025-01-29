const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();


// test route
app.get("/api/products", (req, res) => {
    const products = products;
    res.json(products)
})

const PORT = process.env.PORT;
app.listen(PORT || 9000, ()=> {
    console.log(`Server Listening on Port ${PORT}`)
})