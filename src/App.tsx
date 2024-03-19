import { Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useDispatch } from "react-redux";
import type { AppDispatch } from './Redux/Store';
// import { QueryClient, QueryClientProvider } from 'react-query'
// import { useSelector } from "react-redux";
// import type { RootState } from './Redux/Store'

import '../dist/tailwindOut.css';

import Header from './Components/Header/Header';
import routes from './Route/Routes';
import Footer from './Components/Footer/Footer';
import FixedFooter from './Components/FixedFooter/FixedFooter';
import Loading from './Components/Global/Loading/Loading';
import { useLogin } from './Hooks/LoginHook';
import { useBasket } from './Hooks/BasketHook';
import { login } from "./Redux/Reducer/LoginReucer";
import { addToBasket } from './Redux/Reducer/BasketReducer';

// const queryClient = new QueryClient();

export default function App(): React.JSX.Element {
  // const loginInfo = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch<AppDispatch>();
  const [cookies, ,] = useCookies(['token']);
  const { data: loginInfo } = useLogin(cookies.token);
  const { data: basketList } = useBasket(loginInfo?.length > 0 ? loginInfo[0]?.userInfo?.id : '-1');
  // const { data: favoriteList } = useFavorite(loginInfo?.userInfo ? loginInfo?.userInfo?.id : '-1');
  const router = useRoutes(routes(loginInfo ? loginInfo[0]?.isLogin : false));

  useEffect(() => {
    loginInfo?.length > 0 && dispatch(login(loginInfo[0]));
  }, [loginInfo])
  useEffect(() => {
    basketList && dispatch(addToBasket(basketList));
  }, [basketList])

  return (
    <>
      {/* <QueryClientProvider client={queryClient}>
      </QueryClientProvider> */}
      <Suspense fallback={<Loading />}>
        <Header />
        {router}
        <FixedFooter />
        <Footer />
      </Suspense>
    </>
  )
}
