import ReactDOM from 'react-dom/client'
import { CacheProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import Theme from './Theme.tsx';
import { cacheRtl } from './Theme/MainTheme.ts';
import Store from './Redux/Store.ts';
import LoadDatas from './Utils/LoadDatas';

// const isDarkMode = localStorage.getItem('dark-mode');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
      <CacheProvider value={cacheRtl}>
        <BrowserRouter>
          <LoadDatas />
          <Theme />
        </BrowserRouter>
      </CacheProvider>
    </Provider>
  //     <React.StrictMode>
  // </React.StrictMode>,
)
