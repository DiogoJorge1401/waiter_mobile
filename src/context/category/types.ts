import { Category } from '../../types/Category';

export interface CategoryContextProps {
  categories: Category[];
  activeCategory: null | string;
  isFetchingCategories: boolean;
  fetchedCategoriesError: boolean;
}

interface CategoryContextFuncs {
  handleSelectCategory: (id: string) => void;
}

export interface ICategoryContext extends CategoryContextProps, CategoryContextFuncs {}
