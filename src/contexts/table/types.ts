
export interface TableContextProps {
  table: string;
  action: null | CallableFunction;
  isTableModalVisible: boolean;
}

interface TableContextFuncs {
  setTable: (value: string) => void;
  handleSaveTable: (table: string) => void;
  handleShowTableModal: (cb?: CallableFunction) => void;
  handleCloseTableModal: () => void;
}

export interface ITableContext extends TableContextProps, TableContextFuncs {}
