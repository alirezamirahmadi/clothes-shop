import { useState, useEffect } from "react";
import { useTheme, IconButton, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import StoreIcon from '@mui/icons-material/Store';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { useCookies } from "react-cookie";
// import { useSelector } from "react-redux";
// import type { RootState } from '../../Redux/Store'

import Login from "../../Pages/Login/Login";
import BasketDrawer from "../Global/Basket/BasketDrawer";
import FavortiteDrawer from '../Global/Favorite/FavoriteDrawer'
import ProductFilter from "../Global/Products/ProductFilter";
import Category from "../Global/Category/Category";
import BadgeButton from "../Global/BadgeButton/BadgeButton"
import DrawerBox from "../Global/DrawerBox/DrawerBox";
import AccountMenu from "../Header/NavBar/AccountMenu";
import { useBasket } from "../../Hooks/BasketHook";
import { useFavorite } from "../../Hooks/FavoriteHook";
import { useLogin } from "../../Hooks/LoginHook";
import { loginType } from "../../Utils/Types";

export default function FixedFooter(): React.JSX.Element {
  const theme = useTheme();
  const [cookies, , ] = useCookies(['token']);
  const { data: login } = useLogin(cookies.token);
  const [loginInfo, setLoginInfo] = useState<loginType>();
  const [showDrawer, setShowDrawer] = useState(false);
  const [drawerItem, setDrawerItem] = useState<React.JSX.Element>();
  const [isOpenProductRoute, setIsOpenProductRoute] = useState(false);
  const { data: basketList } = useBasket(loginInfo? loginInfo?.userInfo?.id : '-1');
  const { data: favoriteList } = useFavorite(loginInfo? loginInfo?.userInfo?.id : '-1');
  const location = useLocation();
  // const basketList = useSelector((state: RootState) => state.basket)
  // const favoriteList = useSelector((state: RootState) => state.favorite)
  // const loginInfo = useSelector((state: RootState) => state.login);

  const handleSelectCategory = (idCategory: number): void => {

  }
  const handleChangeSize = (code: number[]) => {

  }
  const handleChangeColor = (code: string) => {

  }
  const handlePriceRanges = (code: number | number[]) => {

  }
  const changeSortHandler = (sortTitle: string) => {

  }
  const changeSearchHandler = (textSearch: string) => {

  }
  const loginHandler = () => {
    setDrawerItem(<Login closeDrawer={closeDrawer} />)
    setShowDrawer(true);
  }
  const basketHandler = () => {
    setDrawerItem(<BasketDrawer closeDrawer={closeDrawer} />)
    setShowDrawer(true);
  }
  const favoriteHandler = () => {
    setDrawerItem(<FavortiteDrawer />)
    setShowDrawer(true);
  }
  const filterHandler = () => {
    setDrawerItem(<ProductFilter handleChangeSize={handleChangeSize} handleChangeColor={handleChangeColor} handleChangeSort={changeSortHandler} handleChangeSearch={changeSearchHandler} handlePriceRanges={handlePriceRanges} />)
    setShowDrawer(true);
  }
  const categoryHandler = () => {
    setDrawerItem(<Category handleSelectCategory={handleSelectCategory} closeDrawer={closeDrawer} />)
    setShowDrawer(true);
  }
  const closeDrawer = () => {
    setShowDrawer(false);
  }
  const openDrawer = () => {
    setShowDrawer(true);
  }

  useEffect(() => {
    login && setLoginInfo(login[0])
  }, [login])

  useEffect(() => {
    setIsOpenProductRoute((location.pathname.includes('products') || location.pathname.includes('category')) ? true : false)
  }, [location])

  return (
    <>
      <div dir='rtl' className="flex justify-between h-14 fixed bottom-0 w-full z-10 shadow-md border rounded-full px-5 lg:invisible"
        style={{ backgroundColor: theme.palette.primary.contrastText }}
      >
        {isOpenProductRoute ?
          <IconButton onClick={filterHandler} size="medium" color="primary" sx={{ paddingBottom: 1 }} className="flex flex-col justify-center">
            <FilterAltIcon fontSize="inherit" />
            <Typography variant='caption'>فیلترها</Typography>
          </IconButton>
          :
          <IconButton onClick={categoryHandler} size="medium" color="primary" sx={{ paddingBottom: 1 }} className="flex flex-col justify-center">
            <WidgetsIcon fontSize="inherit" />
            <Typography variant='caption'>دسته یندی</Typography>
          </IconButton>
        }
        <BadgeButton size='medium' clickHandler={basketHandler} badgeContent={basketList?.length} badgeColor='primary' icon={<ShoppingCartOutlinedIcon fontSize="inherit" color="primary" />} title="سبد خرید" />
        <IconButton onClick={loginHandler} size="medium" color="primary" sx={{ paddingBottom: 1 }} className="flex flex-col justify-center">
          <StoreIcon fontSize="inherit" />
          <Typography variant='caption'>فروشگاه</Typography>
        </IconButton>
        <BadgeButton size='medium' clickHandler={favoriteHandler} badgeContent={favoriteList?.length} badgeColor='primary' icon={<FavoriteBorderOutlinedIcon fontSize="inherit" color="primary" />} title="علاقمندی" />
        {
          loginInfo?.token ?
            <AccountMenu name={loginInfo?.userInfo ? loginInfo.userInfo?.firstName : ' '} />
            :
            <IconButton onClick={loginHandler} size="medium" color="primary" sx={{ paddingBottom: 1.3 }} className="flex flex-col justify-center">
              <LogoutIcon fontSize="inherit" /> <Typography variant='caption'>ورود</Typography>
            </IconButton>
        }
      </div>
      <DrawerBox side='left' show={showDrawer} closeDrawer={closeDrawer} openDrawer={openDrawer}>
        {drawerItem}
      </DrawerBox>
    </>
  )
}