import socketIo from 'socket.io-client';
import { BsStopwatch } from 'react-icons/bs';
import { GiChickenOven } from 'react-icons/gi';
import OrdersBoard from '../OrdersBoard';
import * as C from './style';
import { IOrder } from '../../types/Order';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';


const Orders = () => {

  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    const socket = socketIo('http://localhost:3333', {
      transports: ['websocket'],
    });

    socket.on('order@new', (order) => {
      setOrders(prevState => prevState.concat(order));
    });
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await api.get('/order/orders');
      setOrders(response.data);
    };
    fetchOrders();
  }, []);

  const waiting = orders.filter((order) => order.status === 'WAITING');
  const inProduction = orders.filter((order) => order.status === 'IN_PRODUCTION');
  const done = orders.filter((order) => order.status === 'DONE');

  const handleCancelOrder = (orderId: string) => {
    setOrders((prevState) => prevState.filter((order) => order._id!== orderId));
  };


  const handleChangeStatus = (orderId: string, status: IOrder['status']) => {
    setOrders((prevState) => prevState.map((order) => (
      order._id === orderId ? { ...order, status } : order
    )));

  };

  return (
    <C.Container>
      <OrdersBoard
        title="Fila de espera"
        icon={<BsStopwatch size={30} color="#000" />}
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onChangeStatus={handleChangeStatus}
      />
      <OrdersBoard
        title="Em preparação"
        icon={<GiChickenOven size={30} color="#000" />}
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onChangeStatus={handleChangeStatus}
      />
      <OrdersBoard
        title="Pronto"
        icon={<AiFillCheckCircle color="#3CCB28" size={30} />}
        orders={done}
        onCancelOrder={handleCancelOrder}
        onChangeStatus={handleChangeStatus}
      />
    </C.Container>
  );
};

export default Orders;
