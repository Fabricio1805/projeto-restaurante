import { Router } from 'express';
import cancelOrder from '../app/useCases/orders/cancelOrder';
import changeOrderStatus from '../app/useCases/orders/changeOrderStatus';
import createOrder from '../app/useCases/orders/createOrder';
import listOrders from '../app/useCases/orders/listOrders';

const routerOrder = Router();

// list orders
routerOrder.get('/orders', listOrders);

// create order
routerOrder.post('/order', createOrder);

// change order status
routerOrder.patch('/orders/:orderId', changeOrderStatus);

// delete/cancel order
routerOrder.delete('/orders/:orderId', cancelOrder);

export default routerOrder;
