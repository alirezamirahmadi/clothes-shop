import { useState } from "react";
import { Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MenuIcon from '@mui/icons-material/Menu';

import Search from './Search/Search'
import NavBar from './NavBar/NavBar';
import DrawerBox from '../Global/DrawerBox/DrawerBox';
import Menu from "./NavBar/Menu";

export default function Header() {
  const [showDrawer, setShowDrawer] = useState(false);
  const theme = useTheme();

  const menuHandle = () => {
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
      <div className="relative shadow">
        <div dir="rtl" className="lg:hidden relative mb-4 ">
          <img className='mx-auto pt-1 w-24' src='../../../public/Image/Header/header.png' />
          <IconButton onClick={menuHandle} sx={{ position: 'absolute', top: 15, left: 15 }}>
            <MenuIcon fontSize='large' color='primary' />
          </IconButton>
          <DrawerBox side='left' show={showDrawer} closeDrawer={closeDrawer} openDrawer={openDrawer}>
            <div dir="rtl" className="flex flex-col justify-center mt-4 mx-3">
              <Search itemWidth={250} />
              <Menu showType="col" closeDrawer={closeDrawer}/>
            </div>
          </DrawerBox>
        </div>
        <div dir='rtl' className='pt-5 lg:flex justify-between hidden'>
          <img className='md:w-36 md:ps-14 w-12 pt-1' src='../../../public/Image/Header/header.png'></img>
          <div className='md:pt-7'>
            <Search itemWidth={300} />
          </div>
          <div dir='rtl' className='lg:pt-10 lg:pl-14 flex invisible lg:visible'>
            <PhoneIphoneIcon />
            <Typography variant='body1'> پشیبانی: </Typography>
            <Typography color={theme.palette.primary.main} variant='body1'>۰۹۲۰۸۴۰۸۸۹۸</Typography>
          </div>
        </div>
        <NavBar />
      </div>
    </>
  )
}