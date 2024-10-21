import { useContext } from 'react';
import { InventoryContext } from '../contexts/InventoryContext'; // Asegúrate de que esté bien importado

const useInventory = () => {
  const context = useContext(InventoryContext); // Usar useContext para acceder al contexto

  if (!context) {
    throw new Error('useInventory debe ser usado dentro de un InventoryProvider');
  }

  const { inventoryFiles, addFile, removeFile } = context;

  return {
    inventoryFiles,
    addFile,
    removeFile,
  };
};

export default useInventory;
