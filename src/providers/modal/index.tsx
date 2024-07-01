'use client';

import { useContext } from "react";
import ModalProvider, { ModalContext } from "./provider";
import { ModalContextType } from "./provider";

export const useModal = () => {
  const context = useContext<ModalContextType>(ModalContext);
  if (!context) throw new Error("Use Modal must be used inside ModalProvider")
  return context;
}

export default ModalProvider;
