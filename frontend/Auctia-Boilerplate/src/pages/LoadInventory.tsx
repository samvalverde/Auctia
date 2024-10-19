import React from 'react';
import { RiDeleteBinLine, RiFileLine } from 'react-icons/ri';
import { useDropzone } from 'react-dropzone';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function LoadInventory() {
  const [files, setFiles] = React.useState<File[]>([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]),
    multiple: true,
  });

  const filesList = files.map((file) => (
    <li
      key={file.name}
      className="relative rounded-lg border border-gray-300 bg-white p-4 shadow-md"
    >
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <button
          type="button"
          className="rounded-full p-2 text-gray-500 hover:text-red-600"
          aria-label="Remove file"
          onClick={() =>
            setFiles((prevFiles) => prevFiles.filter((prevFile) => prevFile.name !== file.name))
          }
        >
          <RiDeleteBinLine className="w-5 h-5" />
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
  ));

  return (
    <div className="min-h-fit bg-gray-50 flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto p-8 w-full">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Carga tu Inventario</h2>
        <p className="text-lg text-gray-600 mt-4 text-center">
          Aquí puedes subir un archivo con los productos que deseas agregar a tu inventario.
        </p>

        <div className="mt-10 w-full">
          <div
            {...getRootProps()}
            className={classNames(
              isDragActive ? 'border-green-500 bg-green-50' : '',
              'flex justify-center items-center p-20 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer'
            )}
          >
            <input {...getInputProps()} />
            <div className="text-center">
              <RiFileLine className="w-12 h-12 text-gray-400 mx-auto" />
              <p className="text-lg text-gray-600">Arrastra tus archivos aquí o haz clic para seleccionar</p>
              <p className="mt-2 text-sm text-gray-500">Tamaño máximo por archivo: 1G</p>
            </div>
          </div>
          {filesList.length > 0 && (
            <>
              <h3 className="mt-8 text-lg font-semibold text-gray-800">Archivos seleccionados</h3>
              <ul className="mt-4 space-y-4">{filesList}</ul>
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
