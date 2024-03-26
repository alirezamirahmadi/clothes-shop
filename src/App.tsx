import { Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from './Redux/Store';
// import { QueryClient, QueryClientProvider } from 'react-query'
// import { useSelector } from "react-redux";
// import type { RootState } from './Redux/Store'

import '../dist/tailwindOut.css';

import Header from './Components/Header/Header';
import routes from './Route/Routes';
import Footer from './Components/Footer/Footer';
import BottomNavigation from './Components/BottomNavigation/BottomNavigation';
import Loading from './Components/Global/Loading/Loading';
// import { useLogin } from './Hooks/LoginHook';
// import { useBasket } from './Hooks/BasketHook';
import { getLogin } from "./Redux/Reducer/LoginReucer";
import { getBasket } from './Redux/Reducer/BasketReducer';
import { getFavorite } from './Redux/Reducer/FavoriteReducer';
// import { addToBasket } from './Redux/Reducer/BasketReducer';

// const queryClient = new QueryClient();

export default function App(): React.JSX.Element {
  // const loginInfo = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch<AppDispatch>();
  const loginInfo = useSelector((state: RootState) => state.login);
  const [cookies, ,] = useCookies(['token']);
  // const { data: loginInfo, isFetched } = useLogin(cookies.token);
  // const { data: basketList } = useBasket(loginInfo?.length > 0 ? loginInfo[0]?.userInfo?.id : '-1');
  // const { data: favoriteList } = useFavorite(loginInfo?.userInfo ? loginInfo?.userInfo?.id : '-1');
  const router = useRoutes(routes(loginInfo?.isLogin ?? false));

  // useEffect(() => {
  //   loginInfo && dispatch(login(loginInfo));
  // }, [loginInfo])

  useEffect(() => {
    dispatch(getLogin(cookies.token));
  }, [])

  useEffect(() => {
    dispatch(getBasket(loginInfo?.userInfo?.id ?? '0'));
    dispatch(getFavorite(loginInfo?.userInfo?.id ?? '0'));
    // basketList && dispatch(addToBasket(basketList));
  }, [loginInfo])

  return (
    <>
      {/* <QueryClientProvider client={queryClient}>
      </QueryClientProvider> */}
      <Suspense fallback={<Loading />}>
        <Header />
        {router}
        <BottomNavigation />
        <Footer />
      </Suspense>
    </>
  )
}
