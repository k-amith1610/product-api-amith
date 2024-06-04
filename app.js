require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const product_routes = require("./routes/products");

const port = process.env.port || 5000;

app.get("/", (req, res) => {
    res.send("REST api testing");
});

app.use("/api/products", product_routes);

const Start = async() => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(port, () => {
            console.log(`running on http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

Start();