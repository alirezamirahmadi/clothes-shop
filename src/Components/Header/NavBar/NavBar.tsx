import { useState } from "react";
import { useTheme, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from "react-redux";
import type { RootState } from '../../../Redux/Store'

import Login from "../../../Pages/Login/Login";
import BasketDrawer from "../../Global/Basket/BasketDrawer";
import FavortiteDrawer from '../../Global/Favorite/FavoriteDrawer'
import DrawerBox from "../../Global/DrawerBox/DrawerBox";
import BadgeButton from "../../Global/BadgeButton/BadgeButton";
import Menu from "./Menu";
import AccountMenu from "./AccountMenu";

export default function NavBar(): React.JSX.Element {
  const theme = useTheme();
  const [showDrawer, setShowDrawer] = useState(false);
  const [drawerItem, setDrawerItem] = useState<React.JSX.Element>();
  const basketList = useSelector((state: RootState) => state.basket);
  const favoriteList = useSelector((state: RootState) => state.favorite);
  const loginInfo = useSelector((state: RootState) => state.login);

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
  const closeDrawer = () => {
    setShowDrawer(false);
  }
  const openDrawer = () => {
    setShowDrawer(true);
  }

  return (
    <>
      <div dir="rtl" className="lg:flex lg:justify-between md:h-24 hidden mb-4 shadow-md z-10 w-full "
        style={{ backgroundColor: theme.palette.secondColor.main }}>
        <Menu showType="row" />
        <div dir="rtl" className="flex ms-14 my-5" style={{ fontFamily: theme.typography.fontFamily }}>
          <div dir='rtl' className="flex">
            <BadgeButton size='large' clickHandler={basketHandler} badgeContent={basketList.length} badgeColor='mainColor' icon={<ShoppingCartOutlinedIcon fontSize="inherit" color='textColor' />} />
            <BadgeButton size='large' clickHandler={favoriteHandler} badgeContent={favoriteList.length} badgeColor='mainColor' icon={<FavoriteBorderOutlinedIcon fontSize="inherit" color='textColor' />} />
            {
              loginInfo.token ?
                <div className="me-3 mt-1">
                  <AccountMenu name={loginInfo.userInfo ? loginInfo.userInfo.firstName : ' '} />
                </div>
                :
                <IconButton onClick={loginHandler} size="large" sx={{ paddingBottom: 2 }}><LogoutIcon fontSize="inherit" color='textColor' /></IconButton>
            }
          </div>
          <DrawerBox side='right' show={showDrawer} closeDrawer={closeDrawer} openDrawer={openDrawer}>
            {drawerItem}
          </DrawerBox>
        </div>
      </div>
    </>
  )
}