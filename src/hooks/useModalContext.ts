import { useRef } from 'react';
import { useUpdate } from 'react-utils-jave';
import { IModalContext } from '../types/IModalContext';
import { IModalData } from '../types/IModalData';
import produce from 'immer';

export const useModalContext = (): IModalContext => {
  const modalsRef = useRef<IModalData[]>([]);
  // const update = useUpdate();

  return {
    modals: modalsRef.current,
    createModal: (name?: string): number => {
      modalsRef.current.push({
        isActive: true,
        name,
      });

      // update();
      return modalsRef.current.length - 1;
    },
    removeModal: (idx) => {
      modalsRef.current = modalsRef.current.filter(
        (_, modalIdx) => modalIdx !== idx,
      );
      // update();
    },
    openModal: (idx) => {
      modalsRef.current = produce(modalsRef.current, (modalsDraft) => {
        const modalDraft = modalsDraft[idx];

        if (!modalDraft) {
          return modalsDraft;
        }

        modalDraft.isActive = true;
        return modalsDraft;
      });
      // update();
    },
    closeModal: (idx) => {
      modalsRef.current = produce(modalsRef.current, (modalsDraft) => {
        const modalDraft = modalsDraft[idx];

        if (!modalDraft) {
          return modalsDraft;
        }

        modalDraft.isActive = false;
        return modalsDraft;
      });
      // update();
    },
  };
};
