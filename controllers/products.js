const Product = require("../models/products");

const getAllProducts = async (req, res) => {
    const myData = await Product.find(req.query);
    res.status(200).json({myData});
}

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "I Am from getAllProductsTesting" });
}

module.exports = { getAllProducts, getAllProductsTesting };