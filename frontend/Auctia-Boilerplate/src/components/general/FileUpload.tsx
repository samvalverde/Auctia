import React, { useState } from 'react';

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;  // onFileSelect recibe un archivo o null
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);  // Estado para manejar el archivo seleccionado

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;  // Si hay archivo, lo selecciona, sino es null
    setSelectedFile(file);
    onFileSelect(file);  // Ejecuta la función con el archivo seleccionado o null
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && <p>Archivo seleccionado: {selectedFile.name}</p>}
    </div>
  );
};

export default FileUpload;
