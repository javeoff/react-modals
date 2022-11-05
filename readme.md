# React Modals

```shell
npm i react-modals-jave
```

## Usage

```jsx
import { createModal, ModalProvider } from 'react-modals-jave';

const MyModal = ({ onClose, children }) => (
  <div onClick={onClose}>
    <div>Modal</div> 
    {children}
  </div>
);

const useModal = createModal(MyModal);

const App = () => {
  return (
    <ModalProvider>
      <Modals /> 
    </ModalProvider>
  )
}

const Header = () => {
  const { close: closeMainModal } = useModal('main');
  
  return <div onClick={closeMainModal}>Header</div>
}

const Modals = () => {
  const { Modal, close, isActive, open } = useModal();
  const mainModalProps = useModal('main');

  return (
    <div>
      <Header />
      {isActive && <Modal onClose={close} />}
      {mainModalProps.isActive && (
        <mainModalProps.Modal>
          <div>Title</div>
        </mainModalProps.Modal>
      )}
    </div>
  )
}
```

## Stack 

- SWC
- Rollup^2.66
- Terser
- React Contexts
- React Hook Factories
