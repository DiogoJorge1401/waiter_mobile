import { createContext, useContext, useState } from 'react';
import { useProduct } from '../product';
import { useTable } from '../table';
import { IOrderContext } from './types';

const OrderContext = createContext({} as IOrderContext);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const { setProductsInCar } = useProduct();
  const { setTable } = useTable();
  const [isOrderRequestLoading, setIsOrderRequestLoading] = useState(false);
  const [isConfirmedOrderModalVisible, setIsConfirmedOrderModalVisible] =
    useState(false);

  // ActionsOrder
  const handleResetOrder = () => {
    setTable('');
    setProductsInCar([]);
  };

  const handleConfirmedOrder = () => {
    handleShowConfirmedOrderModal();
  };

  // ConfirmedOrderModal
  const handleShowConfirmedOrderModal = async () => {
    setIsOrderRequestLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsOrderRequestLoading(false);
    setIsConfirmedOrderModalVisible(true);
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
        handleShowConfirmedOrderModal,
        handleCloseConfirmedOrderModal,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
