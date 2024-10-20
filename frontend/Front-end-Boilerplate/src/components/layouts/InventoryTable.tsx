import React from 'react';
import { RiDeleteBinLine, RiFileLine } from 'react-icons/ri';

interface InventoryTableProps {
  files: File[];
  onRemoveFile: (fileName: string) => void;
}

const InventoryTable: React.FC<InventoryTableProps> = ({ files, onRemoveFile }) => {
  return (
    <ul className="mt-4 space-y-4">
      {files.map((file) => (
        <li
          key={file.name}
          className="relative flex items-center rounded-lg border border-gray-300 bg-white p-4 shadow-md"
        >
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <button
              type="button"
              className="rounded-full p-2 text-gray-500 hover:text-red-600"
              aria-label="Remove file"
              onClick={() => onRemoveFile(file.name)}
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
      ))}
    </ul>
  );
};

export default InventoryTable;
