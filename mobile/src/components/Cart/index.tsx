import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/cartItem';
import {
  Item,
  ProductContainer,
  Actions,
  Image,
  QuantityContainer,
  ProductDetails,
  Summary,
  TotalContainer,
} from './styles';
import { MinusCircle } from '../../assets/Icons/MinusCircle';
import { PlusCircle } from '../../assets/Icons/PlusCircle';
import { Text } from '../Text';
import formatCurrency from '../../utils/formatCurrency';
import Button from '../Button';
import { IProduct } from '../../types/product';
import { useState } from 'react';
import OrderConfirmedModal from '../OrderConfirmedModal/index';
import api from '../../services/api';

interface CartProps {
  cartItems: CartItem[];
  onAdd: (product: IProduct) => void;
  onRemove: (product: IProduct) => void;
  onConfirmOrder: () => void;
  selectedTable: string;
}

const Cart = ({ cartItems, onAdd, onRemove, onConfirmOrder, selectedTable}: CartProps) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const total = cartItems.reduce((total, { product, quantity }) => {
    return total + product.price * quantity;
  }, 0);


  const handleConfirmOrder = async () => {
    setIsLoading(true);
    const payload = {
      table: selectedTable,
      products: cartItems.map((cartItem) => ({
        product: cartItem.product._id,
        quantity: cartItem.quantity,
      })),
    };

    await api.post('/order/order', payload);

    setIsLoading(false);
    setModalVisible(true);
  };

  const handleOK = () => {
    onConfirmOrder();
    setModalVisible(false);
  };
  return (
    <>

      <OrderConfirmedModal
        visible={isModalVisible}
        onOk={handleOK}
      />

      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          style={{ marginBottom: 20, maxHeight: 150 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(cartItem) => cartItem.product._id}
          renderItem={({ item: cartItem }) => (
            <Item>
              <ProductContainer>
                <Image
                  source={{
                    uri: `http://192.168.0.104:3333/uploads/${cartItem.product.imagePath}`,
                  }}
                />

                <QuantityContainer>
                  <Text size={14} color="#666">
                    {cartItem.quantity}x
                  </Text>
                </QuantityContainer>

                <ProductDetails>
                  <Text size={14} weight="600">
                    {cartItem.product.name}
                  </Text>
                  <Text size={14} color="#666" style={{ marginTop: 4 }}>
                    {formatCurrency(cartItem.product.price)}
                  </Text>
                </ProductDetails>
              </ProductContainer>

              <Actions>
                <TouchableOpacity onPress={() => onRemove(cartItem.product)}>
                  <MinusCircle />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginLeft: 20 }}
                  onPress={() => onAdd(cartItem.product)}
                >
                  <PlusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />
      )}


      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color="#666">Total</Text>
              <Text size={20} weight="600">
                {formatCurrency(total)}
              </Text>
            </>
          ) : (
            <Text color="#666">Seu carrinho está vazio</Text>
          )}
        </TotalContainer>

        <Button
          label="Confirmar Pedido"
          onPress={handleConfirmOrder}
          disabled={cartItems.length === 0}
          loading={isLoading}
        />
      </Summary>

    </>
  );
};

export default Cart;
