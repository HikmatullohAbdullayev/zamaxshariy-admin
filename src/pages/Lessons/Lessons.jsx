import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';
import { Button } from '../../components/ui/button';

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
      <div className="flex justify-evenly items-center mx-auto max-w-[600px]  gap-[10px]  border border-blue-800 bg-blue-50 rounded-[12px] px-[10px] py-[12px]">
        <h2
          onClick={openModal}
          className="bg-bg text-black cursor-pointer rounded-[12px] py-[12px] px-[14px] text-[24px] mobil670:text-[18px] "
        >
          Yangi darslik qo`shish +
        </h2>

        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
}

export default Lessons;
