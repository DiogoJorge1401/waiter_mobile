import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { useProduct } from '../../context/product';
import { useTable } from '../../context/table';
import { Product } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { getImageURI } from '../../utils/getImageURI';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import {
  ProductContainer,
  ProductDetails,
  ProductImage,
  ProductPrice,
} from './styles';

interface MenuProductItemProps {
  product: Product;
}

export const MenuProductItem = ({ product }: MenuProductItemProps) => {
  const { setActiveProduct, handleAddProductInCar, handleShowProductModal } =
    useProduct();

  const { table, handleShowTableModal } = useTable();

  const handlePress = (product: Product) => (e: GestureResponderEvent) => {
    e.stopPropagation();

    if (!table)
      return handleShowTableModal(() => {
        handleAddProductInCar(product);
      });

    handleAddProductInCar(product);
  };

  const handleSelectProduct = (product: Product) => {
    return () => {
      handleShowProductModal();
      setActiveProduct(product);
    };
  };
  return (
    <ProductContainer onPress={handleSelectProduct(product)}>
      <ProductImage
        source={{
          uri: getImageURI(product.imagePath),
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
            <PlusCircle disabled={!table} />
          </TouchableOpacity>
        </ProductPrice>
      </ProductDetails>
    </ProductContainer>
  );
};
