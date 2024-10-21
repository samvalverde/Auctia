import { useState } from 'react';

const useFileUpload = () => {
  const [files, setFiles] = useState<File[]>([]);

  const addFile = (newFile: File) => {
    setFiles(prevFiles => [...prevFiles, newFile]);
  };

  const removeFile = (fileName: string) => {
    setFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
  };

  return {
    files,
    addFile,
    removeFile,
  };
};

export default useFileUpload;
 