import { Request, Response } from 'express';
import { Product } from '../../models/Product';

const listProducts = async (req: Request, res: Response) => {
  const products = await Product.find();

  res.json(products);
};

export default listProducts;
