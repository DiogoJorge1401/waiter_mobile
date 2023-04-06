import { Text } from '../Text';
import { Container } from './styles';

interface HeaderProps {
  selectedOrder: null | Record<string, string>;
}

export const Header = ({ selectedOrder }: HeaderProps) => {
  return (
    <Container>
      {!selectedOrder ? (
        <>
          <Text size={14} color="#333" opacity={0.9}>
            Bem vindo(a) ao
          </Text>

          <Text size={24} weight="700">
            RAPID
            <Text size={24}>SERVE</Text>
          </Text>
        </>
      ) : (
        <Text size={24} weight="700">
          {selectedOrder.table}
        </Text>
      )}
    </Container>
  );
};
