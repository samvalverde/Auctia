import React, { createContext, useState, useContext, ReactNode } from 'react';

interface InventoryContextType {
  inventoryFiles: File[];
  addFile: (file: File) => void;
  removeFile: (fileName: string) => void;
}

// Definimos el contexto con un tipo indefinido inicialmente
const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

// Componente de proveedor
export const InventoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [inventoryFiles, setInventoryFiles] = useState<File[]>([]);

  const addFile = (file: File) => {
    setInventoryFiles(prevFiles => [...prevFiles, file]);
  };

  const removeFile = (fileName: string) => {
    setInventoryFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
  };

  return (
    <InventoryContext.Provider value={{ inventoryFiles, addFile, removeFile }}>
      {children}
    </InventoryContext.Provider>
  );
};

// Hook para utilizar el contexto de inventario
export const useInventoryContext = () => {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error('useInventoryContext debe ser usado dentro de InventoryProvider');
  }
  return context;
};
