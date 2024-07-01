'use client';

import CustomModal from "@/components/custom-modal";
import { useModal } from "@/providers/modal";

export default function Home() {
  const { setOpen } = useModal();
  const handleClick = () => {
    setOpen((
      <CustomModal>
        <div className="rounded-lg bg-black/50 text-white shadow-black/30 min-w-[500px] min-h-[500px]">
          Hellew from modal
        </div>
      </CustomModal>
    ));
  }
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      Home Page
      <button
        type="button"
        onClick={() => handleClick()}
        className="bg-black text-white rounded-md"
      >
        Open Modal
      </button>
    </div>
  );
}
