import { Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from './Redux/Store';
import { ReactQueryDevtools } from 'react-query/devtools';
import '../dist/tailwindOut.css';

import Header from './Components/Header/Header';
import routes from './Route/Routes';
import Footer from './Components/Footer/Footer';
import BottomNavigation from './Components/BottomNavigation/BottomNavigation';
import Loading from './Components/Global/Loading/Loading';
import { getLogin } from "./Redux/Reducer/LoginReucer";
import { getBasket } from './Redux/Reducer/BasketReducer';
import { getFavorite } from './Redux/Reducer/FavoriteReducer';

export default function App(): React.JSX.Element {

  const dispatch = useDispatch<AppDispatch>();
  const loginInfo = useSelector((state: RootState) => state.login);
  const [cookies, ,] = useCookies(['token']);
  const router = useRoutes(routes(loginInfo?.isLogin ?? false));

  useEffect(() => {
    dispatch(getLogin(cookies.token));
  }, [])

  useEffect(() => {
    dispatch(getBasket(loginInfo?.userInfo?.id ?? '0'));
    dispatch(getFavorite(loginInfo?.userInfo?.id ?? '0'));
  }, [loginInfo])

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        {router}
        <BottomNavigation />
        <ReactQueryDevtools />
        <Footer />
      </Suspense>
    </>
  )
}
