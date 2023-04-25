import { createContext, useContext, useEffect, useState } from 'react';
import { app } from '../../api/app';
import { Category } from '../../types/Category';
import { ICategoryContext } from './types';

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

  // Category
  const handleSelectCategory = (id: string) => {
    setActiveCategory((prev) => (prev === id ? null : id));
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

    const doFetchs = async () => {
      await getCategories();
    };

    doFetchs();
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
