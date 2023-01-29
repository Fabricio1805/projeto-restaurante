import { Request, Response } from 'express';
import { Product } from '../../models/Product';

const listProductsByCategories = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const products = await Product.find().where('category').equals(categoryId);

  res.json(products);
};

export default listProductsByCategories;
