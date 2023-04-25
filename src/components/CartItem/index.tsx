import { TouchableOpacity } from 'react-native';
import { useProduct } from '../../context/product';
import { CartProduct } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { getImageURI } from '../../utils/getImageURI';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import {
  Actions,
  Container,
  Image,
  PriceContainer,
  ProductDetails,
} from './styles';

interface CarProps {
  product: CartProduct;
}

export const CartItem = ({ product }: CarProps) => {
  const { handleAddProductInCar, handleRemoveProductInCar } = useProduct();

  return (
    <Container>
      <ProductDetails>
        <Image source={{ uri: getImageURI(product.imagePath) }} />

        <Text size={14} color="#666">
          {product.quantity}x
        </Text>

        <PriceContainer>
          <Text size={14} weight="600">
            {product.name}
          </Text>

          <Text size={14} color="#666">
            {formatCurrency(product.price)}
          </Text>
        </PriceContainer>
      </ProductDetails>

      <Actions>
        <TouchableOpacity onPress={() => handleAddProductInCar(product)}>
          <PlusCircle />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleRemoveProductInCar(product)}>
          <MinusCircle />
        </TouchableOpacity>
      </Actions>
    </Container>
  );
};
