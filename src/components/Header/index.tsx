import { TouchableOpacity } from 'react-native';
import { useOrder } from '../../context/order';
import { useTable } from '../../context/table';
import { Text } from '../Text';
import { Container, Content, OrderHeader, TableName } from './styles';

export const Header = () => {
  const { table } = useTable();
  const { handleResetOrder } = useOrder();

  return !table ? (
    <Container>
      <Text size={14} color="#333" opacity={0.9}>
        Bem vindo(a) ao
      </Text>

      <Text size={24} weight="700">
        RAPID
        <Text size={24}>SERVE</Text>
      </Text>
    </Container>
  ) : (
    <Content>
      <OrderHeader>
        <Text size={24} weight="600">
          Pedido
        </Text>

        <TouchableOpacity onPress={handleResetOrder}>
          <Text color="#d73035" weight="600" size={14}>
            cancelar pedido
          </Text>
        </TouchableOpacity>
      </OrderHeader>

      <TableName>
        <Text color="#666">Mesa {table}</Text>
      </TableName>
    </Content>
  );
};
