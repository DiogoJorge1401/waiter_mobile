import { useOrder } from '../../context/order';
import { useProduct } from '../../context/product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { Text } from '../Text';
import { Container, SummaryDetails } from './styles';

export const OrderSummary = () => {
  const {  isOrderRequestLoading, handleConfirmedOrder } = useOrder();
  const { productsInCar } = useProduct();
  return (
    <Container>
      <SummaryDetails>
        {productsInCar.length ? (
          <>
            <Text color="#666">Total</Text>

            <Text size={20} weight="600">
              {formatCurrency(
                productsInCar.reduce(
                  (prev, current) => prev + current.price * current.quantity,
                  0
                )
              )}
            </Text>
          </>
        ) : (
          <>
            <Text color="#999">Seu carrinho</Text>

            <Text color="#999">está vazio</Text>
          </>
        )}
      </SummaryDetails>

      <Button
        loading={isOrderRequestLoading}
        disabled={productsInCar.length === 0}
        onPress={handleConfirmedOrder}
      >
        Confirmar Pedido
      </Button>
    </Container>
  );
};
