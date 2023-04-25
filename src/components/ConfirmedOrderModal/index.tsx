import { Modal } from 'react-native';
import { useOrder } from '../../context/order';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';
import { Button, Container, Header } from './styles';

export const ConfirmedOrderModal = () => {
  const { isConfirmedOrderModalVisible, handleCloseConfirmedOrderModal } =
    useOrder();

  return (
    <Modal
      visible={isConfirmedOrderModalVisible}
      animationType="fade"
      onRequestClose={handleCloseConfirmedOrderModal}
      transparent={false}
    >

      <Container>
        <Header>
          <CheckCircle />

          <Text size={20} weight="600" color="#fff">
            Pedido Confirmado
          </Text>
        </Header>

        <Text color="#fff" opacity={0.9}>
          O pedido já entrou na fila de produção!
        </Text>

        <Button onPress={handleCloseConfirmedOrderModal}>
          <Text weight="600" color="#d73035">
            OK
          </Text>
        </Button>
      </Container>
    </Modal>
  );
};
