// Modal.js

import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-50 bg-black opacity-50"
            onClick={onClose}
          ></div>

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto outline-none focus:outline-none">
            <div className="relative max-w-md lg:max-w-xl mx-auto my-6 overflow-auto">
              {/* Modal content */}
              <div className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none w-full h-[600px]">
                {/* Header */}
                <div className="sticky top-0 z-10 flex items-center bg-blue-300 justify-between p-5 rounded-t">
                  <h3 class="text-md merriweather-text w-[800px] text-center ml-5">Free Gift Code!!</h3>
                  <button
                    className="text-gray-500 font-bold pl-6 text-lg focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={onClose}
                  >
                    X
                  </button>
                </div>
                {/* Body */}
                <div className="relative flex-auto">{children}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
