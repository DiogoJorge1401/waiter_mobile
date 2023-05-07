import { createContext, useContext, useEffect, useState } from 'react';
import { app } from '../../api/app';
import { Category } from '../../types/Category';
import { ICategoryContext } from './types';
import { useProduct } from '../product';

const CategoryContext = createContext({} as ICategoryContext);

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isFetchingCategories, setIsFetchingCategories] = useState(false);
  const [fetchedCategoriesError, setFetchedCategoriesError] = useState(false);
  const { getProducts } = useProduct();

  // Category
  const handleSelectCategory = async (id: string) => {
    const cat_id = activeCategory === id ? null : id;
    const url = cat_id ? `/categories/${cat_id}/products` : '/products';

    setActiveCategory(cat_id);
    await getProducts(url);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        setIsFetchingCategories(true);

        const { data } = await app.get('/categories');

        const { categories } = data;

        setCategories(() => categories);
      } catch (error) {
        console.log(error);

        setFetchedCategoriesError(true);
      } finally {
        setIsFetchingCategories(false);
      }
    };

    getCategories();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        activeCategory,
        isFetchingCategories,
        fetchedCategoriesError,
        handleSelectCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
