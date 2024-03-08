import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useSelector } from "react-redux";
import type { RootState } from './Redux/Store'

import '../dist/tailwindOut.css';

import Header from './Components/Header/Header';
import routes from './Route/Routes';
import Footer from './Components/Footer/Footer';
import FixedFooter from './Components/FixedFooter/FixedFooter';
import Loading from './Components/Global/Loading/Loading';

const queryClient = new QueryClient();

export default function App(): React.JSX.Element {
  const loginInfo = useSelector((state: RootState) => state.login);
  const router = useRoutes(routes(loginInfo.isLogin));
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loading />}>
          <Header />
          {router}
          <FixedFooter />
          <Footer />
        </Suspense>
      </QueryClientProvider>
    </>
  )
}
