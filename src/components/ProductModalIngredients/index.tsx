import { FlatList } from 'react-native';
import { useProduct } from '../../contexts/product';
import { Text } from '../Text';
import { Container, Ingredient } from './styles';

export const ProductModalIngredients = () => {
  const { activeProduct } = useProduct();

  if (!activeProduct?.ingredients?.length) return null;

  return (
    <Container>
      <Text weight="600" color="#666">
        Ingredientes
      </Text>

      <FlatList
        contentContainerStyle={{ gap: 4 }}
        data={activeProduct.ingredients}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: ingredient }) => {
          return (
            <Ingredient>
              <Text>{ingredient.icon}</Text>

              <Text size={14} color="#666">
                {ingredient.name}
              </Text>
            </Ingredient>
          );
        }}
      />
    </Container>
  );
};
