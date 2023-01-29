import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import createProduct from '../app/useCases/products/createProduct';
import listProducts from '../app/useCases/products/listProduct';

const routerProduct = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// list product
routerProduct.get('/products', listProducts);

// Create Product
routerProduct.post('/product', upload.single('image'), createProduct);

export default routerProduct;
