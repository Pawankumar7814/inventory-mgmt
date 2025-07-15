// import modules

import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';

const app = express();
// create an instance of productController
const productController = new ProductController();

// Setting up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src', 'views'));

app.use(expressEjsLayouts);

app.get("/", productController.getProducts);
app.use(express.static('src/views'));

// app.get("/", (req, res) => {
//     return res.status(200).send("Welcome to Inventory App");
// });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});