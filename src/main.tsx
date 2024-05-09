import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'

import Theme from '../src/Theme/Theme.tsx';
import Store from './Redux/Store.ts';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      keepPreviousData: true,
      // staleTime: 300000,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Theme />
      </QueryClientProvider>
    </BrowserRouter>
  </Provider>
)
