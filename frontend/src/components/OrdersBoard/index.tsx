import { ReactNode, useState } from 'react';
import { toast } from 'react-toastify';
import { IOrder } from '../../types/Order';
import OrderModal from '../OrderModal';
import * as C from './style';
import React from 'react';
import api from '../../services/api';

interface OrdersBoardProps {
  icon: ReactNode;
  title: string;
  orders: IOrder[];
  onCancelOrder: (orderId: string) => void;
  onChangeStatus: (orderId: string, status: IOrder['status']) => void;
}
const OrdersBoard = ({ icon, title, orders,onCancelOrder, onChangeStatus }: OrdersBoardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = (order: IOrder) => {
    setIsModalVisible(true);
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedOrder(null);
  };

  const handleCancelOrder = async () => {
    if (!selectedOrder) {
      return;
    }
    setIsLoading(true);

    await api.delete(`/order/orders/${selectedOrder._id}`);

    toast.success(`O Pedido da mesa ${selectedOrder.table} foi cancelado com sucesso.`);

    onCancelOrder(selectedOrder._id);
    setIsLoading(false);
    setIsModalVisible(false);
  };


  const handleChangeStatus = async () => {
    if (!selectedOrder) {
      return;
    }
    setIsLoading(true);

    const newStatus = selectedOrder.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

    await api.patch(`/order/orders/${selectedOrder._id}`, { status: newStatus });

    toast.success(
      `O Pedido da mesa ${selectedOrder.table} foi para a produção`
    );
    onChangeStatus(selectedOrder._id, newStatus);
    setIsLoading(false);
    setIsModalVisible(false);
  };

  return (
    <C.Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
        onChangeStatus={handleChangeStatus}
      />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{orders.length > 0}</span>
      </header>

      {orders.length > 0 && (
        <C.OrdersContainer>
          {orders.map((order) => (
            <button key={order._id} onClick={() => handleOpenModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} Itens</span>
            </button>
          ))}
        </C.OrdersContainer>
      )}
    </C.Board>
  );
};

export default OrdersBoard;
