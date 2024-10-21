import React, { createContext, useState, ReactNode } from 'react';

// Definir el tipo de contexto
interface InventoryContextType {
  inventoryFiles: File[];
  addFile: (file: File) => void;
  removeFile: (fileName: string) => void;
}

// Crear el contexto
export const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

// Proveedor del contexto
export const InventoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [inventoryFiles, setInventoryFiles] = useState<File[]>([]);

  const addFile = (file: File) => {
    setInventoryFiles((prevFiles) => [...prevFiles, file]);
  };

  const removeFile = (fileName: string) => {
    setInventoryFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <InventoryContext.Provider value={{ inventoryFiles, addFile, removeFile }}>
      {children} 
    </InventoryContext.Provider>
  );
};
