import { Request, Response } from 'express';
import { Category } from '../../models/Category';

const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, icon } = req.body;
    const category = await Category.create({
      name,
      icon,
    });

    res.status(201).json(category);
  } catch {
    res.status(500).json({
      error: 'Interval server error!',
    });
  }
};

export default createCategory;
