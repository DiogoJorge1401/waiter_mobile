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
  addActiveProduct: () => void;
  setActiveProduct: (product: Product) => void;
  handleAddProductInCar: (product: Product) => void;
  handleShowProductModal: (cb?: CallableFunction) => void;
  handleCloseProductModal: () => void;
  handleRemoveProductInCar: (product: CartProduct) => void;
  setProductsInCar: (products: CartProduct[]) => void;
}

export interface IProductContext extends ProductContextProps, ProductContextFuncs {}
