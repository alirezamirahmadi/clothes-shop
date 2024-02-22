import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import Theme from '../src/Theme/Theme.tsx';
import Store from './Redux/Store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <BrowserRouter>
      <Theme />
    </BrowserRouter>
  </Provider>
)
