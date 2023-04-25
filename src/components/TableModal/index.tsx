import { useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { useTable } from '../../context/table';
import { isAndroid } from '../../utils/isAndroid';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { Form, Header, Input, ModalBody, Overlay } from './styles';

export const TableModal = () => {
  const { isTableModalVisible, handleCloseTableModal, handleSaveTable } =
    useTable();

  const [tableTmp, setTableTmp] = useState('');

  const buttonDisabled = tableTmp.length === 0;

  const handlePress = () => {
    handleSaveTable(tableTmp);
    setTableTmp('');
  };

  const handleOnRequestClose = () => {
    setTableTmp('');
    handleCloseTableModal();
  };
  return (
    <Modal
      visible={isTableModalVisible}
      transparent
      animationType="fade"
      onRequestClose={handleOnRequestClose}
    >
      <Overlay behavior={isAndroid() ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>

            <TouchableOpacity onPress={handleOnRequestClose}>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              onChangeText={setTableTmp}
              value={tableTmp}
              placeholder="Número da Mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
            />
            <Button onPress={handlePress} disabled={buttonDisabled}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
};
