import { useState } from 'react';
import FileUpload from '../components/layouts/FileUpload';
import InventoryTable from '../components/layouts/InventoryTable';

export default function LoadInventory() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileSelect = (selectedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleRemoveFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <div className="min-h-fit bg-gray-50 flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto p-8 w-full">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Carga tu Inventario</h2>
        <p className="text-lg text-gray-600 mt-4 text-center">
          Aquí puedes subir un archivo con los productos que deseas agregar a tu inventario.
        </p>

        <div className="mt-10 w-full">
          <FileUpload onFileSelect={handleFileSelect} />
          {files.length > 0 && (
            <>
              <h3 className="mt-8 text-lg font-semibold text-gray-800">Archivos seleccionados</h3>
              <InventoryTable files={files} onRemoveFile={handleRemoveFile} />
            </>
          )}
        </div>

        <div className="flex justify-end mt-8 space-x-4 w-full">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Subir archivos
          </button>
        </div>
      </div>
    </div>
  );
}
