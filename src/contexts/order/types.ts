export interface OrderContextProps {
  isOrderRequestLoading: boolean;
  isConfirmedOrderModalVisible: boolean;
}

interface OrderContextFuncs {
  handleResetOrder: () => void;
  handleConfirmedOrder: () => void;
  handleCloseConfirmedOrderModal: () => void;
}

export interface IOrderContext extends OrderContextProps, OrderContextFuncs {}
