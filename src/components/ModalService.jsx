import React from "react";

const ModalService = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[500px] h-[740px] p-6 mt-[4px]">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4">
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalService;
