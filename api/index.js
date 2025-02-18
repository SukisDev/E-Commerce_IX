const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/Products")
dotenv.config();
const PORT = process.env.PORT;

const moogoose = require("mongoose");
const { default: mongoose } = require("mongoose");

// connect db
mongoose.connect(process.env.MOONGOOSEDB_RUL).then(()=>console.log("db Connected")).then((err)=>{
    err;
})


app.listen(PORT || 9000, ()=> {
    console.log(`Server Listening on Port ${PORT}`)
})


// jeang0125
// NylKWSDnDEmCK81h
// mongodb+srv://jeang0125:NylKWSDnDEmCK81h@cluster0.xaqs2.mongodb.net/React-node-app



/*
// Api product test route
app.get("/api/products/:id", (req, res) => {
    const product = products.find((product)=>product.id == req.params.id)
    res.json(product)
})
*/