import { createContext, useContext, useState } from 'react';
import { useProduct } from '../product';
import { useTable } from '../table';
import { IOrderContext } from './types';
import { app } from '../../api/app';

const OrderContext = createContext({} as IOrderContext);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const { setProductsInCar, productsInCar } = useProduct();
  const { setTable, table } = useTable();
  const [isOrderRequestLoading, setIsOrderRequestLoading] = useState(false);
  const [isConfirmedOrderModalVisible, setIsConfirmedOrderModalVisible] =
    useState(false);

  // ActionsOrder
  const handleResetOrder = () => {
    setTable('');
    setProductsInCar([]);
  };

  const handleConfirmedOrder = async () => {
    setIsOrderRequestLoading(true);
    try {
      await app.post('/orders', {
        table,
        products: productsInCar.map(({ quantity, _id }) => ({
          product: _id,
          quantity,
        })),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsOrderRequestLoading(false);
      setIsConfirmedOrderModalVisible(true);
    }
  };

  const handleCloseConfirmedOrderModal = () => {
    setIsConfirmedOrderModalVisible(false);
    handleResetOrder();
  };

  return (
    <OrderContext.Provider
      value={{
        isOrderRequestLoading,
        isConfirmedOrderModalVisible,
        handleResetOrder,
        handleConfirmedOrder,
        handleCloseConfirmedOrderModal,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
