import { Modal } from './Modal';
import { createModal } from 'react-modals-jave';

const useModal = createModal(Modal);

export const Page = () => {
  const { Modal, open, close, isActive } = useModal('f');

  console.log('1');

  return (
    <div>
      <h1>Page</h1>
      {/*<button onClick={() => open}>open modal</button>*/}
      {/*<button onClick={() => close}>close modal</button>*/}
      {isActive && (
        <Modal />
      )}
    </div>
  )
}
