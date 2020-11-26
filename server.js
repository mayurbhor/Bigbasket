const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
//app.use(express.json())
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://mayurbhor:Mayur@2025@cluster0.h2rzw.mongodb.net/grocery?retryWrites=true&w=majority", {
    useNewUrlParser: true,

    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Connected…")
})
    .catch(err => console.log(err));

const Product = mongoose.model("products",
    new mongoose.Schema({
        _id: { type: String, default: shortid.generate },
        title: String,
        type: String,
        image: String,
        price: Number,
    })
);

app.get("/api/products", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

app.post("/api/products", async (req, res) => {
    console.log(req.body);
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    console.log(newProduct, savedProduct)
    res.send(savedProduct);
});

app.delete("/api/products/:id", async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
})

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("serve at http://localhost:4000")); 