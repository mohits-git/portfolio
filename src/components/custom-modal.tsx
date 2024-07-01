'use client';
import { useModal } from "@/providers/modal";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

const CustomModal: React.FC<Props> = ({ children }) => {
  const { setClose } = useModal();
  const handleClose = () => {
    setClose();
  }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-10 flex flex-col justify-center items-center bg-black/10">
      <div className="bg-gray-400 rounded-full fixed top-2 right-2">
        <button
          className="px-3 py-1 text-lg text-gray-700 hover:text-gray-600 hover:underline"
          onClick={() => handleClose()}
        >
          X
        </button>
      </div>
      {children}
    </div>
  );
}

export default CustomModal;
