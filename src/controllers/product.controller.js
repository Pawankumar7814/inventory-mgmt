import path from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController {

    getProducts(req, res) {
        let products = ProductModel.getProducts();
        // console.log(JSON.stringify(products, null, 2));

        return res.render('products.ejs', { products: products });
    }

}