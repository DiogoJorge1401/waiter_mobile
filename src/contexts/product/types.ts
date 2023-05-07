import { CartProduct, Product } from '../../types/Product';

export interface ProductContextProps {
  products: Product[];
  productsInCar: CartProduct[];
  activeProduct: Product;
  isFetchingProducts: boolean;
  fetchedProductsError: boolean;
  isProductModalVisible: boolean;
}

interface ProductContextFuncs {
  getProducts: (endpoint: string) => Promise<void>;
  addActiveProduct: () => void;
  setActiveProduct: (product: Product) => void;
  setProductsInCar: (products: CartProduct[]) => void;
  handleAddProductInCar: (product: Product) => void;
  handleShowProductModal: (cb?: CallableFunction) => void;
  handleCloseProductModal: () => void;
  handleRemoveProductInCar: (product: CartProduct) => void;
}

export interface IProductContext
  extends ProductContextProps,
    ProductContextFuncs {}
