import ReactDOM from 'react-dom';
import { ModalProvider } from 'react-modals-jave';
import { Page } from './Page';

const App = () => {
  return (
    <ModalProvider>
      <Page />
    </ModalProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
