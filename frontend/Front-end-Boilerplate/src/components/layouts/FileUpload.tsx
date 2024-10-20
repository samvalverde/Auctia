import React from 'react';
import { RiFileLine } from 'react-icons/ri';
import { useDropzone } from 'react-dropzone';

interface FileUploadProps {
  onFileSelect: (files: File[]) => void;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => onFileSelect(acceptedFiles),
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className={classNames(
        isDragActive ? 'border-green-500 bg-green-50' : '',
        'flex justify-center items-center p-20 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer transition-all duration-300 ease-in-out'
      )}
    >
      <input {...getInputProps()} />
      <div className="text-center">
        <RiFileLine className="w-12 h-12 text-gray-400 mx-auto" />
        <p className="text-lg text-gray-600">Arrastra tus archivos aquí o haz clic para seleccionar</p>
        <p className="mt-2 text-sm text-gray-500">Tamaño máximo por archivo: 1GB</p>
      </div>
    </div>
  );
};

export default FileUpload;
