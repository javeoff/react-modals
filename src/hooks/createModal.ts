import { ModalContext } from '../ModalProvider';
import { FC, useContext, useEffect, useMemo } from 'react';

interface IResult {
  Modal: FC<Record<string, unknown>>;
  close: VoidFunction;
  open: VoidFunction;
  isActive: boolean;
}

export const createModal = (Modal: FC<Record<string, unknown>>) => (name?: string): IResult => {
  const ctx = useContext(ModalContext);

  const modalIdx = useMemo(() => {
    if (!ctx?.modals) {
      throw new Error(`ModalProvider doesn't exists`);
    }

    const existsModalIdx = ctx.modals.findIndex((modal) => modal.name === name);

    if (name && existsModalIdx !== -1) {
      return existsModalIdx;
    }

    return ctx.createModal(name);
  }, []);

  const modalData = ctx.modals[modalIdx]!;

  useEffect(() => {
    return () => {
      ctx.removeModal(modalIdx);
    }
  });

  return {
    Modal,
    close: () => ctx.closeModal(modalIdx),
    open: () => ctx.openModal(modalIdx),
    isActive: modalData?.isActive,
  };
};
