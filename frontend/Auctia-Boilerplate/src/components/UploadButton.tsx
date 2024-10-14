import React from 'react';

interface UploadButtonProps {
  onClick: () => void;  // Define que el onClick es una función que no recibe parámetros y no devuelve nada
}

const UploadButton: React.FC<UploadButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>Cargar Archivo</button>
  );
};

export default UploadButton;
