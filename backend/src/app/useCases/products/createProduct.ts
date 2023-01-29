import { Request, Response } from 'express';
import { Product } from '../../models/Product';

const createProduct = async (req: Request, res: Response) => {
  try {
    const imagePath = req.file?.filename;

    const { name, description, price, category, ingredients } = req.body;

    const product = await Product.create({
      name,
      description,
      imagePath,
      price,
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    });

    res.json(product);
  } catch {
    res.status(500).json({
      error: 'Interval server error!',
    });
  }
};

export default createProduct;
