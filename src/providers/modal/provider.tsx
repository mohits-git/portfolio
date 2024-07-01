'use client'
import React, {
  createContext,
  ReactNode,
  useEffect,
  useState
} from "react";

export interface ModalContextType {
  isOpen: boolean;
  setOpen: (modal: ReactNode) => void;
  setClose: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  setOpen: (modal) => { },
  setClose: () => { }
});


type ModalProviderProps = {
  children: ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const setOpen = (modal: ReactNode) => {
    setModalContent(modal);
    setIsOpen(true);
  }
  const setClose = () => {
    setIsOpen(false);
    setModalContent(null);
  }

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <ModalContext.Provider value={{ isOpen, setOpen, setClose }}>
      {children}
      {isOpen && modalContent}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
