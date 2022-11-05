import { createContext, FC, ReactElement } from 'react';
import { useModalContext } from './hooks/useModalContext';
import { IModalContext } from './types/IModalContext';

export const ModalContext = createContext<IModalContext>({
  modals: [],
  createModal: () => 0,
  removeModal: () => {},
  openModal: () => {},
  closeModal: () => {},
});

interface IProps {
  children: ReactElement;
}

export const ModalProvider: FC<IProps> = ({ children }) => {
  const value = useModalContext();

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
