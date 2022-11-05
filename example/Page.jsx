import { createModal } from 'react-modals-jave';
import { useEffect } from 'react';

export const Modal = ({ onClose }) => {
  return (
    <div onClick={onClose}>Modal</div>
  )
}

const useModal = createModal(Modal);

const Header = () => {
  const { close, isActive } = useModal('f');
  return <h1 onClick={close}>Modal is a {isActive ? 'active' : 'noactive'}</h1>
}

export const Page = () => {
  const { Modal, open, close, isActive } = useModal('f');

  useEffect(() => {
    open()
  }, [])

  console.log('rerender');

  return (
    <div>
      <Header />
      <button onClick={open}>open</button>
      <button onClick={close}>close</button>
      {isActive && (
        <Modal onClose={close} />
      )}
    </div>
  )
}
