import { FlatList } from 'react-native';
import { categories } from '../../mocks/categories';
import { Text } from '../Text';
import { Category, Container, Icon } from './styles';
interface CategoriesProps {
  activeCategory: string | null;
  onSelectActiveCategory: (id: string) => () => void;
}

export const Categories = ({
  activeCategory,
  onSelectActiveCategory,
}: CategoriesProps) => {

  return (
    <Container>
      <FlatList
        horizontal
        data={categories}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(caat) => caat._id}
        contentContainerStyle={{ gap: 24 }}
        renderItem={({ item: category }) => {
          const isSelected = category._id === activeCategory;
          const opacity = isSelected ? 1 : 0.5;

          return (
            <Category
              isActive={isSelected}
              onPress={onSelectActiveCategory(category._id)}
            >
              <Icon isActive={isSelected}>
                <Text opacity={opacity}>{category.icon}</Text>
              </Icon>

              <Text size={14} weight="600" opacity={opacity}>
                {category.name}
              </Text>
            </Category>
          );
        }}
      />
    </Container>
  );
};
