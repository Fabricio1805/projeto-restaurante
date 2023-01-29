import { FlatList } from 'react-native';
import { Text } from '../Text';

import {
  Product,
  ProductDetails,
  Image,
  Separator,
  AddToCartButton,
} from './style';
import formatCurrency from '../../utils/formatCurrency';
import { PlusCircle } from '../../assets/Icons/PlusCircle';
import ProductModal from '../ProductModal';
import { useState } from 'react';
import { IProduct } from '../../types/product';


interface MenuProps{
  onAddToCart: (product: IProduct) => void;
  products: IProduct[];
}

const Menu = ({onAddToCart, products}: MenuProps) => {
  const [isModalVisisble, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const handleOpenModal = (product: IProduct) => {
    setIsModalVisible(true);
    setSelectedProduct(product);
  };
  return (
    <>
      <ProductModal
        visible={isModalVisisble}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />
      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        ItemSeparatorComponent={Separator}
        keyExtractor={(product) => product._id}
        renderItem={({ item: product }) => (
          <Product onPress={() => handleOpenModal(product)}>
            <Image
              source={{
                uri: `http://192.168.0.104:3333/uploads/${product.imagePath}`,
              }}
            />

            <ProductDetails>
              <Text weight="600">{product.name}</Text>
              <Text
                size={14}
                color="#666"
                style={{
                  marginVertical: 8,
                }}
              >
                {product.description}
              </Text>
              <Text size={14} weight="600">
                {formatCurrency(product.price)}
              </Text>
            </ProductDetails>

            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCartButton>
          </Product>
        )}
      />
    </>
  );
};

export default Menu;
