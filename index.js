// import modules

import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import { validateRequest } from './middleware/validation.middleware.js';

const app = express();
// create an instance of productController
const productController = new ProductController();

// Setting up the view engine
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.join(path.resolve(), 'src', 'views'));

// Layout configuration
app.use(expressEjsLayouts);

//parse form data
app.use(express.urlencoded({ extended: true }));

app.get("/", productController.getProducts);
app.get("/new", productController.getAddForm);
app.post("/", validateRequest, productController.saveNewProduct);

app.use(express.static('src/views'));

app.listen(3000, () => {
    console.log("http://localhost:3000");
});