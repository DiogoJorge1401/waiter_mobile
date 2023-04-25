import { createContext, useContext, useEffect, useState } from 'react';
import { app } from '../../api/app';
import { CartProduct, Product } from '../../types/Product';
import { IProductContext } from './types';

const ProductContext = createContext({} as IProductContext);

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeProduct, setActiveProduct] = useState({} as Product);
  const [products, setProducts] = useState<Product[]>([]);
  const [productsInCar, setProductsInCar] = useState<CartProduct[]>([]);
  const [isProductModalVisible, setIsProductModalVisible] = useState(false);
  const [isFetchingProducts, setIsFetchingProducts] = useState(false);
  const [fetchedProductsError, setFetchedProductsError] = useState(false);

  // ProductInCar
  const handleAddProductInCar = (product: Product) => {
    setProductsInCar((prev) => {
      const productIndex = prev.findIndex((prod) => prod._id === product._id);

      if (productIndex === -1) return [...prev, { ...product, quantity: 1 }];

      const existingProduct = prev[productIndex];

      const newCartItems = [...prev];

      newCartItems[productIndex] = {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      };

      return newCartItems;
    });
  };

  const handleRemoveProductInCar = (product: CartProduct) => {
    setProductsInCar((prev) => {
      const productIndex = prev.findIndex((prod) => prod._id === product._id);
      const updateCar = [...prev];

      if (product.quantity === 1) updateCar.splice(productIndex, 1);
      else
        updateCar[productIndex] = {
          ...product,
          quantity: product.quantity - 1,
        };

      return updateCar;
    });
  };

  // AddActiveProduct
  const addActiveProduct = () => {
    handleAddProductInCar(activeProduct);
    handleCloseProductModal();
  };

  // ProductModal
  const handleShowProductModal = () => {
    setIsProductModalVisible(true);
  };

  const handleCloseProductModal = () => {
    setIsProductModalVisible(false);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsFetchingProducts(true);

        const { data } = await app.get('/products');

        const { products } = data;

        setProducts(() => products);
      } catch (error) {
        console.log(error);

        setFetchedProductsError(true);
      } finally {
        setIsFetchingProducts(false);
      }
    };

    const doFetchs = async () => {
      await getProducts();
    };

    doFetchs();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        productsInCar,
        activeProduct,
        isFetchingProducts,
        fetchedProductsError,
        isProductModalVisible,
        setProductsInCar,
        addActiveProduct,
        setActiveProduct,
        handleAddProductInCar,
        handleShowProductModal,
        handleCloseProductModal,
        handleRemoveProductInCar,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
