import { Category } from '../../types/Category';

export interface CategoryContextProps {
  categories: Category[];
  activeCategory: null | string;
  isFetchingCategories: boolean;
  fetchedCategoriesError: boolean;
}

interface CategoryContextFuncs {
  handleSelectCategory: (id: string) => Promise<void>;
}

export interface ICategoryContext
  extends CategoryContextProps,
    CategoryContextFuncs {}
