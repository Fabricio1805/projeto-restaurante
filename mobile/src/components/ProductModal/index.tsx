import { FlatList, Modal } from 'react-native';
import { IProduct } from '../../types/product';

import {
  Image,
  Closebutton,
  Header,
  ModalBody,
  Ingredient,
  IngredientsContainer,
  FooterContainer,
  Footer,
  Price
} from './styles';

import { Text } from '../Text';
import { Close } from '../../assets/Icons/Close';
import formatCurrency from '../../utils/formatCurrency';
import Button from '../Button';

interface ProdcutModalProps {
  visible: boolean;
  onClose: () => void;
  product: null | IProduct;
  onAddToCart: (product: IProduct) => void;
}

const ProductModal = ({ visible, onClose, product,onAddToCart }: ProdcutModalProps) => {

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };


  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: `http://192.168.0.104:3333/uploads/${product.imagePath}`,
        }}
      >
        <Closebutton onPress={onClose}>
          <Close />
        </Closebutton>
      </Image>
      <ModalBody>
        <Header>
          <Text size={24} weight="600">
            {product.name}
          </Text>
          <Text color="#666" style={{ marginTop: 8 }}>
            {product.description}
          </Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight="600" color="#666">
              Ingredientes
            </Text>
            <FlatList
              data={product.ingredients}
              style={{ marginTop: 16 }}
              keyExtractor={(ingredient) => ingredient._id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color="#666" style={{ marginLeft: 20 }}>
                    {ingredient.name}
                  </Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <FooterContainer>
          <Price>
            <Text weight="400" color="#666">
              Preço
            </Text>
            <Text size={20} weight="700">
              {formatCurrency(product.price)}
            </Text>
          </Price>

          <Button onPress={handleAddToCart} label="Adicionar ao Pedido" />
        </FooterContainer>
      </Footer>
    </Modal>
  );
};

export default ProductModal;
