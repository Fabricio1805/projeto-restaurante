import { Modal } from 'react-native';
import { Container, OKBotton } from './styles';
import { CheckCircle } from '../../assets/Icons/CheckCircle';
import { Text } from '../Text';
import { StatusBar } from 'expo-status-bar';


interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}
const OrderConfirmedModal = ({visible, onOk}: OrderConfirmedModalProps) => {
  return (
    <Modal visible={visible} animationType="fade">
      <StatusBar style="light" />
      <Container>
        <CheckCircle />
        <Text size={20} color="#FFF" weight="600">
          Pedido Confirmado
        </Text>

        <Text opacity={0.9} color="#FFF" style={{ marginTop: 12 }}>
          O Pedidojá entrou na fila de produção!
        </Text>

        <OKBotton onPress={onOk}>
          <Text color="#D73035" weight="600">
            OK
          </Text>
        </OKBotton>
      </Container>
    </Modal>
  );
};

export default OrderConfirmedModal;
