import { FlatList } from 'react-native';
import { useApp } from '../../context/app/context';
import { Button } from '../Button';
import { CartItem } from '../CartItem';
import { OrderSummary } from '../OrderSummary';
import { Container } from './styles';
import { useTable } from '../../context/table';
import { useProduct } from '../../context/product';

export const Footer = () => {
  const { isAppLoading } = useApp();
  const { table, handleShowTableModal } = useTable();
  const { productsInCar, products } = useProduct();

  return (
    <Container>
      {table ? (
        <>
          <FlatList
            data={productsInCar}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
            style={{
              maxHeight: 165,
              marginBottom: productsInCar.length ? 20 : 0,
            }}
            renderItem={({ item: product }) => <CartItem product={product} />}
          />

          <OrderSummary />
        </>
      ) : (
        <Button
          onPress={() => handleShowTableModal()}
          disabled={isAppLoading || products.length === 0}
        >
          Novo Pedido
        </Button>
      )}
    </Container>
  );
};
