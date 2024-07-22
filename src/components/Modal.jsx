import React from 'react';
import { Button } from './ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

import Sellect from './Sellect';
import Radio from './Radio';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full "
    >
      <div className="relative top-20 mx-auto p-5 border max-w-[700px]  shadow-lg rounded-[12px]  bg-white mobile730:ml-[16px] mobile730:mr-[16px]">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Yangi darslik qo`shish
          </h3>
          <div className="mt-2 px-7 py-3">
            <form className="grid gap-[20px]">
              <div className="flex justify-around gap-[20px]  mobile768:flex-col mobile768:mx-auto">
                <div className="mb-[16px] w-[250px] mobile768:max-w-[400px] ">
                  <Label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="mavzu"
                  >
                    Darsllik mavzusi
                  </Label>
                  <Input
                    className=""
                    id="mavzu"
                    type="text"
                    placeholder="Darslik mavzusini yozing"
                  />
                </div>
                <div className="mb-[16px] w-[250px] ">
                  <Label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="manba"
                  >
                    Darsllik manba`si
                  </Label>
                  <Input
                    className=""
                    id="manba"
                    type="text"
                    placeholder="Darslik manbasini yozing"
                  />
                </div>
              </div>

              <div className="flex justify-around gap-[20px]  mobile768:flex-col  mobile768:mx-auto">
                <div className="mb-[16px] w-[250px]">
                  <Sellect />
                </div>

                <div className="mb-[16px] w-[250px] ">
                  <p className="block text-gray-700 text-sm font-bold mb-2">
                    Darslik holati
                  </p>
                  <Radio />
                </div>
              </div>

              <Button type="submit">Qo`shish</Button>
            </form>
          </div>
          <div className="items-center px-4 py-3">
            <Button
              variant="blue"
              className="absolute top-2 right-2 "
              type="button"
              onClick={onClose}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
