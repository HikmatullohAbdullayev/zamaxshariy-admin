import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border max-w-[700px]  shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Yangi darslik qo`shish</h3>
          <div className="mt-2 px-7 py-3">
            <form className="grid gap-[20px]">
              <div className="flex justify-around gap-[20px] ">
              <div className="mb-[16px] w-[250px]">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mavzu">
                  Darsllik mavzusi
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-[8px] px-[12px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="mavzu"
                  type="text"
                  placeholder="Darslik mavzusini yozing"
                />
              </div>
              <div className="mb-[16px] w-[250px]">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="soni">
                  Darslar soni
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="soni"
                  type="number"
                  placeholder="Darslar soni yozing"
                />
              </div>
              </div>
              
              <div className="flex justify-around gap-[20px] ">
              <div className="mb-[16px] w-[250px]">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="manba">
                  Darsllik manba`si
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-[8px] px-[12px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="manba"
                  type="text"
                  placeholder="Darslik manbasini yozing"
                />
              </div>
              <div className="mb-[16px] w-[250px]">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="turi">
                  Darslar turi
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="turi"
                  type="text"
                  placeholder="Darslar turi yozing"
                />
              </div>
              </div>
              

              <button type="submit" className="bg-green-500 hover:bg-green-700  text-white font-bold py-[8px] px-[16px] rounded focus:outline-none focus:shadow-outline">
                Qo`shish
              </button>

            </form>
          </div>
          <div className="items-center px-4 py-3">
            <button
              className="absolute top-2 right-2  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onClose}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
