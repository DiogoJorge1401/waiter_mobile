import { createContext, useContext, useEffect, useState } from 'react';
import { ITableContext } from './types';

const TableContext = createContext({} as ITableContext);

export const TableProvider = ({ children }: { children: React.ReactNode }) => {
  const [table, setTable] = useState<string>('');
  const [action, setAction] = useState<null | CallableFunction>(null);
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);

  // SaveTable
  const handleSaveTable = (table: string) => {
    setTable(table);
    setIsTableModalVisible(false);
    alert('Pedido inciado com sucesso!');
  };

  // TableModal
  const handleShowTableModal = (cb?: CallableFunction) => {
    setIsTableModalVisible(true);
    if (cb) {
      setAction(() => cb);
    }
  };

  const handleCloseTableModal = () => {
    setIsTableModalVisible(false);
    setTable('');
  };

  useEffect(() => {
    if (table && action) {
      action();
      setAction(() => null);
    }
  }, [table]);

  return (
    <TableContext.Provider
      value={{
        table,
        action,
        isTableModalVisible,
        setTable,
        handleSaveTable,
        handleShowTableModal,
        handleCloseTableModal,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export const useTable = () => useContext(TableContext);
