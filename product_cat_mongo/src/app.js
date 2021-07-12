const express = require("express");
require("./db/conn");
const Category = require("./models/category");
const Product = require("./models/products");
const app = express();
const port = process.env.PORT ||  8000;
const productRouter = require("./routers/productRoutes");
const categoryRouter = require("./routers/categoryRoutes");


app.use(express.json());

app.use(categoryRouter);
app.use(productRouter);


app.listen(port,()=>console.log(`Listening at Port ${port}`))