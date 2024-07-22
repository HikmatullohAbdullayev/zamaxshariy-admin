import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";

function Lessons() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="container">
      <div className="flex justify-evenly items-center mx-auto max-w-600px]  gap-[10px]  border border-black bg-slate-100 rounded-lg px-[10px] py-[12px]">
        <h2 className="bg-green-500 text-white rounded-[12px] py-[12px] px-[14px] text-[24px] ">Yangi darslik qo`shish</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-[12px] px-[14px] font-bold  rounded"
          onClick={openModal}
        >
          +
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
}

export default Lessons;
