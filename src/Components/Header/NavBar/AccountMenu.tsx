import { useState } from 'react';
import {
  Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Typography, Tooltip, useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logout from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import BusinessIcon from '@mui/icons-material/Business';
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from '../../../Redux/Store';
import { logout, getLogin } from '../../../Redux/Reducer/LoginReucer';

export default function AccountMenu({ name }: { name: string }): React.JSX.Element {
  
  const dispatch = useDispatch<AppDispatch>();
  const loginInfo = useSelector((state: RootState) => state.login);
  const [, , removeCookie] = useCookies(['token']);
  const navigate = useNavigate();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleProfile = () => {
    setAnchorEl(null);
    navigate('/my-account/profile')
  }

  const handleOrders = () => {
    setAnchorEl(null);
    navigate('/my-account/orders')
  }

  const handleAddress = () => {
    setAnchorEl(null);
    navigate('/my-account/address')
  }

  const handleLogout = () => {
    dispatch(logout(loginInfo?.id ?? '-1')).then(() => {
      dispatch(getLogin('0'));
      removeCookie('token');
      setAnchorEl(null);
    })
  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="حساب کاربری من">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: theme.palette.mainColor.main }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <div dir='rtl'>
          <MenuItem onClick={handleProfile} >
            <ListItemIcon>
              <ManageAccountsIcon fontSize="small" />
              <Typography variant='body2'>جزئیات حساب</Typography>
            </ListItemIcon>
          </MenuItem>
        </div>
        <div dir='rtl'>
          <MenuItem onClick={handleOrders}>
            <ListItemIcon>
              <FolderSharedIcon fontSize="small" />
              <Typography variant='body2'>سفارش ها</Typography>
            </ListItemIcon>
          </MenuItem>
        </div>
        <div dir='rtl'>
          <MenuItem onClick={handleAddress}>
            <ListItemIcon>
              <BusinessIcon fontSize="small" />
              <Typography variant='body2'>آدرس ها</Typography>
            </ListItemIcon>
          </MenuItem>
        </div>
        <Divider />
        <div dir='rtl'>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
              <Typography variant='body2'>خروج</Typography>
            </ListItemIcon>
          </MenuItem>
        </div>
      </Menu>
    </>
  );
}