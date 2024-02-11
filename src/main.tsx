import ReactDOM from 'react-dom/client'
// import { CacheProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import Theme from '../src/Theme/Theme.tsx';
// import { cacheRtl } from './Theme/MainTheme.ts';
import Store from './Redux/Store.ts';
import LoadDatas from './Utils/LoadDatas';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <BrowserRouter>
      <LoadDatas />
      <Theme />
    </BrowserRouter>
  </Provider>
)
