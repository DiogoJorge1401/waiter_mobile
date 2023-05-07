import { FlatList } from 'react-native';
import { useProduct } from '../../contexts/product';
import { CenteredContainer } from '../CenteredContainer';
import { Empty } from '../Icons/Empty';
import { MenuProductItem } from '../MenuProductItem';
import { Text } from '../Text';
import { Container, Separator } from './styles';

export const Menu = () => {
  const { products } = useProduct();

  return products.length ? (
    <Container>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <MenuProductItem product={product} />
        )}
      />
    </Container>
  ) : (
    <CenteredContainer>
      <Empty />
      <Text color="#666" style={{ marginTop: 24 }}>
        Nenhum Produto Encontrado!
      </Text>
    </CenteredContainer>
  );
};
