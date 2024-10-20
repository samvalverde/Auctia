import { useState } from 'react';
import { RiFileLine } from 'react-icons/ri';
import FileUpload from '../components/layouts/FileUpload';
import InventoryService from '../services/InventoryService';
import FileUploadService from '../services/FileUploadService';

export default function LoadInventory() {
  const [files, setFiles] = useState<File[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const inventoryService = InventoryService.getInstance(); // Singleton
  const fileUploadService = new FileUploadService(); // Ambassador

  const handleFileSelect = (selectedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleRemoveFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const handleSubmit = async () => {
    setMessage('Procesando inventario...');
    
    // Subimos los archivos utilizando el FileUploadService (Ambassador Pattern)
    const uploadResponses = await fileUploadService.uploadAndProcessFiles(files);
    console.log('Respuesta del servicio externo:', uploadResponses);

    // Procesamos el inventario utilizando el InventoryService (Singleton)
    const response = await inventoryService.processInventory(files);
    setMessage(response);
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
              <ul className="mt-4 space-y-4">
                {files.map((file) => (
                  <li key={file.name} className="relative rounded-lg border border-gray-300 bg-white p-4 shadow-md">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <button
                        type="button"
                        className="rounded-full p-2 text-gray-500 hover:text-red-600"
                        onClick={() => handleRemoveFile(file.name)}
                      >
                        Eliminar
                      </button>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded bg-gray-100">
                        <RiFileLine className="w-6 h-6 text-gray-700" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{file.name}</p>
                        <p className="text-sm text-gray-500">{file.size} bytes</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="flex justify-end mt-8 space-x-4 w-full">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
            onClick={() => setFiles([])}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
            onClick={handleSubmit}
          >
            Subir archivos
          </button>
        </div>
        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
      </div>
    </div>
  );
}
