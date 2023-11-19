import { useState } from "react";


const DeleteModal = ({ isOpen, onCancel, onDelete }) => {
    const [warningMessage] = useState("Are you sure you want to delete this item?");
  
    return (
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } fixed inset-0 overflow-auto bg-gray-800 bg-opacity-50 flex items-center justify-center`}
      >
        <div className="bg-white p-8 rounded shadow-md">
          <p className="text-red-500 text-lg font-semibold mb-4">{warningMessage}</p>
          <div className="flex justify-end">
            <button
              onClick={onCancel}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              onClick={onDelete}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default DeleteModal;
  