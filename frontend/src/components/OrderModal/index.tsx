import { AiFillCheckSquare, AiFillCloseCircle } from 'react-icons/ai';
import { BsStopwatch } from 'react-icons/bs';
import { GiChickenOven } from 'react-icons/gi';
import { IOrder } from '../../types/Order';
import * as C from './style';
import { useEffect } from 'react';
import formatCurrency from '../../utils/formatCurrency';

import {GiCancel} from 'react-icons/gi';
import { AiFillCheckCircle } from 'react-icons/ai';

interface IOrderModalProps {
  visible: boolean;
  order: IOrder | null;
  onClose: () => void;
  onCancelOrder: () => Promise<void>;
  isLoading: boolean;
  onChangeStatus : () => void;
}

const OrderModal = ({ visible, order, onClose,onCancelOrder,isLoading, onChangeStatus }: IOrderModalProps) => {

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0);

  return (
    <C.Orverlay>
      <C.ModalBody>
        <header>
          <strong>Mesa {order?.table}</strong>
          <button>
            <AiFillCloseCircle color="#F11C0B" size={35} onClick={onClose} />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order?.status === 'WAITING' && <BsStopwatch size={25} />}
              {order?.status === 'IN_PRODUCTION' && (
                <GiChickenOven size={30} color="#000" />
              )}
              {order?.status === 'DONE' && (
                <AiFillCheckSquare color="#3CCB28" size={30} />
              )}
            </span>

            <strong>
              {order?.status === 'WAITING' && 'Fila de espera'}
              {order?.status === 'IN_PRODUCTION' && 'Em Produção'}
              {order?.status === 'DONE' && 'Pronto'}
            </strong>
          </div>
        </div>

        <C.OrderDetails>
          <div className="order-items">
            <strong>Itens</strong>
            {order?.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3333/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="60px"
                  height="40px"
                />
                <span className="quantity">{quantity}X</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total:</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </C.OrderDetails>

        <C.Actions>
          {order.status !== 'DONE' && (
            <>
              <button
                className="primary"
                type="button"
                disabled={isLoading}
                onClick={onChangeStatus}
              >
                <span>
                  {order.status === 'WAITING' ? (
                    <GiChickenOven size={30} color="#FFF" />
                  ) : (
                    <AiFillCheckCircle size={30} color="#3CCB28" />
                  )}
                </span>
                <strong>
                  {order.status === 'WAITING' ? (
                    'Iniciar Produção'
                  ) : (
                    'Concluir Pedido'
                  )}

                </strong>
              </button>
            </>
          )}
          <button
            className="secondary"
            type="button"
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            <GiCancel size={25} />
            <strong>Cancelar Pedido</strong>
          </button>
        </C.Actions>
      </C.ModalBody>
    </C.Orverlay>
  );
};

export default OrderModal;
