import { Dispatch } from 'react';
import { IModalData } from './IModalData';

export interface IModalContext {
  modals: IModalData[];
  createModal(name?: string): number;
  removeModal: Dispatch<number>;
  openModal: Dispatch<number>;
  closeModal: Dispatch<number>;
}
