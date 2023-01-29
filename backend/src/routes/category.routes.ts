import { Router } from 'express';
import createCategory from '../app/useCases/categories/createCetegory';
import listCategories from '../app/useCases/categories/listCategories';
import listProductsByCategories from '../app/useCases/categories/listProductsByCategories';

const routerCategory = Router();

// list categories
routerCategory.get('/categories', listCategories);

// Create category
routerCategory.post('/category', createCategory);

// get product by category
routerCategory.get(
  '/categories/:categoryId/products',
  listProductsByCategories,
);

export default routerCategory;
