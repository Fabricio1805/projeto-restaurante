import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Text } from '../Text';
import { Overlay, ModalBody, Header,Form, Input } from './styles';
import { Close } from '../../assets/Icons/Close';
import Button from '../Button';
import { useState } from 'react';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

const TableModal = ({ visible, onClose, onSave }: TableModalProps) => {
  const [table, setTable] = useState('');

  const handleSave = () => {
    onSave(table);
    onClose();
    setTable('');
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a Mesa</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color="#D73035" />
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#999"
              keyboardType="number-pad"
              onChangeText={setTable}
            />

            <Button
              onPress={handleSave}
              label="Salvar"
              disabled={table === ''}
            />
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
};

export default TableModal;
