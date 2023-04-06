import {
  FlatList,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import { Product as ProductType } from '../../main';
import { products } from '../../mocks/products';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import {
  Container,
  Product,
  ProductDetails,
  ProductImage,
  ProductPrice,
  Separator,
} from './styles';

interface MenuProps {
  setProductsInCar: (p: ProductType) => void;
}

export const Menu = ({ setProductsInCar }: MenuProps) => {
  const handlePress = (product: ProductType) => (e: GestureResponderEvent) => {
    e.stopPropagation();
    setProductsInCar(product);
  };

  return (
    <Container>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => {
          return (
            <Product>
              <ProductImage
                source={{
                  uri: `https://waiterapi-production-5243.up.railway.app/uploads/${product.imagePath}`,
                }}
              />

              <ProductDetails>
                <Text weight="600">{product.name}</Text>

                <Text color="#666" size={14}>
                  {product.description}
                </Text>

                <ProductPrice>
                  <Text size={14} weight="600">
                    {formatCurrency(product.price)}
                  </Text>

                  <TouchableOpacity onPress={handlePress(product)}>
                    <PlusCircle />
                  </TouchableOpacity>
                </ProductPrice>
              </ProductDetails>
            </Product>
          );
        }}
      />
    </Container>
  );
};
