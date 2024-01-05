import { useState, useEffect } from 'react';
import { Box, useTheme, IconButton, Typography, Divider } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import BusinessIcon from '@mui/icons-material/Business';
import Logout from '@mui/icons-material/Logout';
import { useDispatch } from "react-redux";

import type { AppDispatch } from '../../Redux/Store';
import Profile from './Profile';
import Orders from './Orders';
import Address from './Address';
import BorderOne from '../../Components/Global/Border/BorderOne'
import { logout } from '../../Redux/Reducer/LoginReucer';

export default function MyAccount(): React.JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const [showItem, setShowItem] = useState<string>('profile');
  const theme = useTheme();
  const tabParams = useParams();
  const navigate = useNavigate();

  const handleProfile = () => {
    setShowItem('profile');
    navigate('/my-account/profile');
  }
  const handleOrders = () => {
    setShowItem('orders');
    navigate('/my-account/orders');
  }
  const handleAddress = () => {
    setShowItem('address');
    navigate('/my-account/address');
  }
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  }

  useEffect(() => {
    tabParams.tab && setShowItem(tabParams.tab);
  }, [tabParams])
  return (
    <>
      <Box className="my-auto pt-1 flex" sx={{ backgroundColor: theme.palette.thirdColor.light }}>
        {showItem === 'profile' && <Profile />}
        {showItem === 'orders' && <Orders />}
        {showItem === 'address' && <Address />}
        <div className="hidden lg:block lg:w-64">
          <BorderOne title='حساب کاربری من'>
            <div className="flex flex-col mb-2 w-60">
              <IconButton onClick={handleProfile} size="medium" sx={{ paddingBottom: 1, justifyContent:'start', borderRadius:1 }} >
                <ManageAccountsIcon fontSize="inherit" color={showItem === 'profile' ? 'mainColor' : 'textColor'} />
                <Typography variant='textbase' sx={{marginLeft:1.5}} color={showItem === 'profile' ? theme.palette.mainColor.main : theme.palette.textColor.main}>جزئیات حساب</Typography>
              </IconButton>
              <IconButton onClick={handleOrders} size="medium" sx={{ paddingBottom: 1, justifyContent:'start', borderRadius:1 }}>
                <FolderSharedIcon fontSize="inherit" color={showItem === 'orders' ? 'mainColor' : 'textColor'} />
                <Typography variant='textbase' sx={{marginLeft:1.5}} color={showItem === 'orders' ? theme.palette.mainColor.main : theme.palette.textColor.main}>سفارش ها</Typography>
              </IconButton>
              <IconButton onClick={handleAddress} size="medium" sx={{ paddingBottom: 1, justifyContent:'start', borderRadius:1 }}>
                <BusinessIcon fontSize="inherit" color={showItem === 'address' ? 'mainColor' : 'textColor'} />
                <Typography variant='textbase' sx={{marginLeft:1.5}} color={showItem === 'address' ? theme.palette.mainColor.main : theme.palette.textColor.main}>آدرس ها</Typography>
              </IconButton>
              <Divider sx={{marginTop:1}}/>
              <IconButton onClick={handleLogout} size="medium" sx={{ paddingBottom: 1, justifyContent:'start', borderRadius:1 }}>
                <Logout fontSize="inherit" color='textColor' />
                <Typography variant='textbase' sx={{marginLeft:1.5}} color={theme.palette.textColor.main}>خروج</Typography>
              </IconButton>
            </div>
          </BorderOne>
        </div>
      </Box>
    </>
  )
}