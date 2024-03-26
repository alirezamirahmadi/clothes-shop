import { useState, useEffect } from 'react';
import { Box, useTheme, IconButton, Typography, Divider } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import BusinessIcon from '@mui/icons-material/Business';
import { useCookies } from "react-cookie";
import Logout from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from '../../Redux/Store';
import Profile from './Profile';
import Orders from './Orders';
import Address from './Address';
import BorderOne from '../../Components/Global/Border/BorderOne';
import { logout, getLogin } from '../../Redux/Reducer/LoginReucer';
// import { logout } from '../../Redux/Reducer/LoginReucer';
// import { useLogin } from '../../Hooks/LoginHook';
// import { useMutationLogin } from '../../Hooks/LoginHook';

export default function MyAccount(): React.JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const loginInfo = useSelector((state: RootState) => state.login);
  const [showItem, setShowItem] = useState<string>('profile');
  const theme = useTheme();
  const tabParams = useParams();
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(['token']);
  // const { data: userInfo } = useLogin(cookies.token);
  // const { mutate: logout } = useMutationLogin('DELETE', userInfo ? userInfo[0].id : '-1')

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
    dispatch(logout(loginInfo?.id ?? '-1')).then(() => {
      dispatch(getLogin('0'));
      removeCookie('token');
      navigate('/');
    })
  }

  useEffect(() => {
    tabParams.tab && setShowItem(tabParams.tab);
  }, [tabParams])
  return (
    <>
      <Box className="my-auto py-8 flex" sx={{ backgroundColor: theme.palette.thirdColor.light }}>
        {showItem === 'profile' && <Profile />}
        {showItem === 'orders' && <Orders />}
        {showItem === 'address' && <Address />}
        <div className="hidden lg:block lg:w-64 mx-4">
          <BorderOne>
            <div className="flex flex-col mb-2">
              <IconButton onClick={handleProfile} size="medium" sx={{ paddingBottom: 1, justifyContent: 'start', borderRadius: 1 }} >
                <ManageAccountsIcon fontSize="inherit" color={showItem === 'profile' ? 'primary' : 'inherit'} />
                <Typography variant='body1' sx={{ marginLeft: 1.5 }} color={showItem === 'profile' ? theme.palette.mainColor.main : 'inherit'}>جزئیات حساب</Typography>
              </IconButton>
              <IconButton onClick={handleOrders} size="medium" sx={{ paddingBottom: 1, justifyContent: 'start', borderRadius: 1 }}>
                <FolderSharedIcon fontSize="inherit" color={showItem === 'orders' ? 'primary' : 'inherit'} />
                <Typography variant='body1' sx={{ marginLeft: 1.5 }} color={showItem === 'orders' ? theme.palette.mainColor.main : 'inherit'}>سفارش ها</Typography>
              </IconButton>
              <IconButton onClick={handleAddress} size="medium" sx={{ paddingBottom: 1, justifyContent: 'start', borderRadius: 1 }}>
                <BusinessIcon fontSize="inherit" color={showItem === 'address' ? 'primary' : 'inherit'} />
                <Typography variant='body1' sx={{ marginLeft: 1.5 }} color={showItem === 'address' ? theme.palette.mainColor.main : 'inherit'}>آدرس ها</Typography>
              </IconButton>
              <Divider sx={{ marginTop: 1 }} />
              <IconButton onClick={handleLogout} size="medium" sx={{ paddingBottom: 1, justifyContent: 'start', borderRadius: 1 }}>
                <Logout fontSize="inherit" />
                <Typography variant='body1' sx={{ marginLeft: 1.5 }}>خروج</Typography>
              </IconButton>
            </div>
          </BorderOne>
        </div>
      </Box>
    </>
  )
}