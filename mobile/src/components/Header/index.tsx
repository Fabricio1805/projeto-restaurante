import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Container, Content, OrderHeader, Table } from './style';

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

const Header = ({ selectedTable, onCancelOrder }: HeaderProps) => {
  return (
    <Container>
      {!selectedTable ? (
        <>
          <Text size={14} opacity={0.9}>
            Bem vindo(a) ao
          </Text>
          <Text size={24} weight="700">
            WAITER
            <Text size={24}>APP</Text>
          </Text>
        </>
      ) : (
        <>
          <Content>
            <OrderHeader>
              <Text size={24} weight="600" color="#333">
                Pedido
              </Text>

              <TouchableOpacity onPress={onCancelOrder}>
                <Text color="#D73035" weight="600" size={14}>
                  Cancelar Pedido
                </Text>
              </TouchableOpacity>
            </OrderHeader>

            <Table>
              <Text color="#666">Mesa: {selectedTable}</Text>
            </Table>
          </Content>
        </>
      )}
    </Container>
  );
};

export default Header;
