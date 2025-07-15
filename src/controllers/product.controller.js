import path from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController {

    getProducts(req, res) {
        let products = ProductModel.getProducts();
        // console.log(JSON.stringify(products, null, 2));
        return res.render('products.ejs', { products: products });
    }

    getAddForm(req, res) {
        return res.render('new-product.ejs', { errorMessage: null });
    }

    saveNewProduct(req, res) {
        let product = req.body;
        // console.log("Product to save:", product);

        ProductModel.addProduct(product);
        // Redirect to the products page after saving
        return res.redirect('/');
    }
}