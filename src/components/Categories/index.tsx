import { FlatList } from 'react-native';
import { useCategory } from '../../context/category';
import { Text } from '../Text';
import { Category, Container, Icon } from './styles';

export const Categories = () => {
  const { handleSelectCategory, activeCategory, categories } = useCategory();

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
              onPress={() => handleSelectCategory(category._id)}
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
