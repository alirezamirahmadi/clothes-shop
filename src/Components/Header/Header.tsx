import { useState, useEffect } from "react";
import { Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MenuIcon from '@mui/icons-material/Menu';
import { useCookies } from "react-cookie";

import Search from './Search/Search'
import NavBar from './NavBar/NavBar';
import DrawerBox from '../Global/DrawerBox/DrawerBox';
import Menu from "./NavBar/Menu";
import { SwitchDarkMode } from "../CustomizedComponent/CustomizedSwitch";

export default function Header() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const theme = useTheme();
  const [cookies, setCookie, removeCookie] = useCookies(['dark-mode']);

  const menuHandle = () => {
    setShowDrawer(true);
  }
  const closeDrawer = () => {
    setShowDrawer(false);
  }
  const openDrawer = () => {
    setShowDrawer(true);
  }
  const handleChangeDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    let dark: boolean = event.target.checked;
    setDarkMode(dark);
    setCookie('dark-mode', dark ? 'dark' : 'light',);
  }
  useEffect(() => {
    setDarkMode(cookies['dark-mode'] === 'dark' ? true : false);
  }, [])

  return (
    <>
      <div className="relative shadow-md">
        <div className="absolute z-10">
          <SwitchDarkMode checked={darkMode} onChange={handleChangeDarkMode} />
        </div>
        <div dir="rtl" className="lg:hidden relative mb-4 ">
          <img className='mx-auto w-60 pt-1' src='../../../public/Image/Header/header.webp' />
          <IconButton onClick={menuHandle} sx={{ position: 'absolute', top: 15, left: 15 }}>
            <MenuIcon fontSize='large' color='mainColor' />
          </IconButton>
          <DrawerBox side='left' show={showDrawer} closeDrawer={closeDrawer} openDrawer={openDrawer}>
            <div dir="rtl" className="flex flex-col justify-center mt-4 mx-3">
              <Search itemWidth={250} />
              <Menu showType="col" closeDrawer={closeDrawer}/>
            </div>
          </DrawerBox>
        </div>
        <div dir='rtl' className='pt-5 lg:flex justify-between hidden'>
          <img className='md:w-72 md:ps-14 w-56 pt-1' src='../../../public/Image/Header/header.webp'></img>
          <div className='md:pt-7'>
            <Search itemWidth={300} />
          </div>
          <div dir='rtl' className='lg:pt-10 lg:pl-14 invisible lg:visible'>
            <PhoneIphoneIcon color='textColor' />
            <Typography color={theme.palette.textColor.main} variant='textlg'> پشیبانی: </Typography>
            <Typography color={theme.palette.mainColor.main} variant='textlg'>۰۹۲۰۸۴۰۸۸۹۸</Typography>
          </div>
        </div>
        <NavBar />
      </div>
    </>
  )
}