import { Modal, TouchableOpacity } from 'react-native';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { Header, ModalBody, Form, Overlay, Input } from './styles';
import { useState } from 'react';
import { Button } from '../Button';
import { isAndroid } from '../../utils/isAndroid';

interface TableModalProps {
  visible: boolean;
  closeModal: () => void;
  onSave: (table: string) => void;
}

export const TableModal = ({
  visible,
  closeModal,
  onSave,
}: TableModalProps) => {
  const [table, setTable] = useState('');

  const handleCloseModal = () => {
    closeModal();
    setTable('');
  };

  const handleSaveTable = () => {
    onSave(table);
    setTable('');
    closeModal();
  };

  const buttonDisabled = table.length === 0;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <Overlay behavior={isAndroid() ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>

            <TouchableOpacity onPress={handleCloseModal}>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              onChangeText={setTable}
              value={table}
              placeholder="Número da Mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
            />
            <Button onPress={handleSaveTable} disabled={buttonDisabled}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
};
