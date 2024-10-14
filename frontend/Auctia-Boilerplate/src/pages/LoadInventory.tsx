import React from 'react';
import FileUpload from '../components/FileUpload';
import InventoryTable from '../components/InventoryTable';
import UploadButton from '../components/UploadButton';

const LoadInventory: React.FC = () => {
  const handleFileUpload = (file: File | null) => {  // Define que el archivo es de tipo File o puede ser null
    if (file) {
      console.log('File uploaded:', file);
      // Simular carga del archivo aquí
    }
  };

  return (
    <div>
      <h1>Cargar Inventario</h1>
      <FileUpload onFileSelect={handleFileUpload} />
      <UploadButton onClick={() => handleFileUpload(null)} />
      <InventoryTable />
    </div>
  );
};

export default LoadInventory;
