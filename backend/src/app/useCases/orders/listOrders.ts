import { Request, Response } from 'express';
import { Order } from '../../models/Order';

const listOrders = async (req: Request, res: Response) => {
  const orders = await Order.find()
    .sort({ createdAt: 1 })
    .populate('products.product');

  res.json(orders);
};

export default listOrders;
