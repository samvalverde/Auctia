import { useContext } from 'react';
import { InventoryContext, useInventoryContext } from '../contexts/InventoryContext';

const useInventory = () => {
  const { inventoryFiles, addFile, removeFile } = useInventoryContext();

  return {
    inventoryFiles,
    addFile,
    removeFile,
  };
};

export default useInventory;
