import { Request, Response } from 'express';
import { Order } from '../../models/Order';

const cancelOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;

    await Order.findByIdAndDelete(orderId);

    res.sendStatus(204);
  } catch {
    res.status(500).json({
      error: 'Interval server error!',
    });
  }
};

export default cancelOrder;
