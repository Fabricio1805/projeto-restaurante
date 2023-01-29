import { ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Menu from '../components/Menu';
import TableModal from '../components/TableModel';

import {
  Container,
  CategoryContainer,
  MenuContainer,
  Footer,
  FooterContainer,
  CenteredContainer,
} from './style';
import Cart from '../components/Cart';
import { CartItem } from '../types/cartItem';
import { IProduct } from '../types/product';

import { Empty } from '../assets/Icons/Empty/index';
import { Text } from '../components/Text';
import { ICategories } from '../types/ICategories';
import api from '../services/api';


const Main = () => {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);


  useEffect(() => {
    Promise.all([
      api.get('/category/categories'),
      api.get('/product/products')

    ]).then(([categories, products]) => {

      setCategories(categories.data);
      setProducts(products.data);
      setIsLoading(false);

    }).catch(err => {
      console.log(err);
    });
  }, []);


  const handleSelectCategory = async (category: string) => {
    const route = !category
      ? '/product/products'
      : `/category/categories/${category}/products`;

    setIsLoadingProducts(true);

    const { data } = await api.get(route);

    setProducts(data);

    setIsLoadingProducts(false);
  };

  //save table
  const handleSaveTable = (table: string) => {
    setSelectedTable(table);
  };

  // cancel order
  const handleResetOrder = () => {
    setCartItems([]);
    setSelectedTable('');
  };

  // add product to cart
  const handleAddToCart = (product: IProduct) => {
    if (!selectedTable) {
      setIsTableModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };
      return newCartItems;
    });
  };

  // remove product from cart
  const handleDecrementCartItem = (product: IProduct) => {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );

      const item = prevState[itemIndex];

      const newCartItems = [...prevState];
      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);
        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };
      return newCartItems;
    });
  };

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleResetOrder}
        />

        {isLoading && (
          <CenteredContainer>
            <ActivityIndicator color="#D73035" size={60} />
          </CenteredContainer>
        )}

        {!isLoading && (
          <>
            <CategoryContainer>
              <Categories
                categories={categories}
                onSelectCategory={handleSelectCategory}
              />
            </CategoryContainer>

            {isLoadingProducts ? (
              <CenteredContainer>
                <ActivityIndicator color="#D73035" size={60} />
              </CenteredContainer>
            ) : (
              <>
                {products.length > 0 ? (
                  <MenuContainer>
                    <Menu onAddToCart={handleAddToCart} products={products} />
                  </MenuContainer>
                ) : (
                  <CenteredContainer>
                    <Empty />
                    <Text color="#666" style={{ marginTop: 24 }}>
                      Nenhum produto foi encontrado!
                    </Text>
                  </CenteredContainer>
                )}
              </>
            )}
          </>
        )}
      </Container>
      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button
              label="Novo Pedido"
              onPress={() => setIsTableModalVisible(true)}
              disabled={isLoading}
            />
          )}

          {selectedTable && (
            <Cart
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onRemove={handleDecrementCartItem}
              onConfirmOrder={handleResetOrder}
              selectedTable={selectedTable}
            />
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
};

export default Main;
