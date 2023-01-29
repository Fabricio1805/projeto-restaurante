import { Request, Response } from 'express';
import { Order } from '../../models/Order';
import { io } from '../../../server';

const createOrder = async (req: Request, res: Response) => {
  try {
    const { table, products } = req.body;
    const order = await Order.create({
      table,
      products,
    });
    const orderDetails = await order.populate('products.product');
    io.emit('order@new', orderDetails);
    res.status(201).json(order);
  } catch {
    res.status(500).json({
      error: 'Interval server error!',
    });
  }
};

export default createOrder;
