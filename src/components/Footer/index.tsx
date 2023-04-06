import { Button } from '../Button';
import { Container } from './styles';

interface FooterProps {
  showTableModal: () => void;
  selectedOrder: null | Record<string, string>;
}

export const Footer = ({ showTableModal, selectedOrder }: FooterProps) => {
  return (
    <Container>
      {selectedOrder ? (
        <Button disabled>Novo Pedido</Button>
      ) : (
        <Button onPress={showTableModal}>Novo Pedido</Button>
      )}
    </Container>
  );
};
