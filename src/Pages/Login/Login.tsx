import { useState } from "react";
import { Typography, useTheme, TextField, Button } from "@mui/material";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { useDispatch } from "react-redux";
import type { AppDispatch } from '../../Redux/Store';

import Snack from "../../Components/Global/Snack/Snack";
import regex from "../../Utils/Regex";
import { ValidateRegex } from "../../Utils/Functions";
import { login } from "../../Redux/Reducer/LoginReucer";

export default function Login({ closeDrawer }: { closeDrawer?: () => void }): React.JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [showSnack, setShowSnack] = useState(false);
  const [contextSnack, setContextSnack] = useState('');

  const loginHandler = () => {
    if (!ValidateRegex(phone, regex.phone)) {
      setContextSnack('شماره موبایل وارد شده صحیح نمی باشد');
      setShowSnack(true);
      return;
    }
    dispatch(login({ isLogin: true, token: '123', userInfo: { firstName: 'علیرضا', lastName: 'میراحمدی', phone: '09139875583' } }))
    closeDrawer && closeDrawer();
  }

  const registerHandler = () => {
    if (!ValidateRegex(phone, regex.phone) || !ValidateRegex(firstName, regex.flName) || !ValidateRegex(lastName, regex.flName)) {
      setContextSnack('اطلاعات وارد شده صحیح نمی باشد');
      setShowSnack(true);
      return;
    }
    dispatch(login({ isLogin: true, token: '123', userInfo: { firstName, lastName, phone } }))
    closeDrawer && closeDrawer();
  }

  return (
    <>
      <div dir='rtl' className="w-80 h-screen mx-auto py-12 " style={{ fontFamily: theme.typography.fontFamily }}>
        <div className="text-center">
          <LockOpenOutlinedIcon sx={{ fontSize: 80 }} color='primary' />
        </div>
        <div className="flex justify-center items-center w-full mb-2">
          <Typography variant="body1" >{isRegister ? 'قبلا ثبت نام کرده‌اید؟' : 'حساب کاربری ندارید؟'}</Typography>
          <Button onClick={() => setIsRegister(!isRegister)} >{isRegister ? 'وارد شوید' : 'ثبت نام'}</Button>
        </div>
        <div className="px-16">
          <TextField value={phone} size="small" onChange={event => setPhone(event.target.value)} sx={{ width: 192, mt: 1 }} color="primary" label={<Typography variant="body1" sx={{ display: 'inline' }}>شماره موبایل</Typography>} variant="outlined" required helperText='' error={!ValidateRegex(phone, regex.phone)} />
          {!isRegister ?
            <Button variant="contained" onClick={loginHandler} sx={{ mt: 1, mx: 'auto', display: 'block' }}>تایید</Button>
            :
            <>
              <TextField value={firstName} size="small" onChange={event => setFirstName(event.target.value)} sx={{ width: 192, mt: 1 }} color="primary" label={<Typography variant="body1" sx={{ display: 'inline' }}>نام</Typography>} variant="outlined" required helperText='' error={!ValidateRegex(firstName, regex.flName)} />
              <TextField value={lastName} size="small" onChange={event => setLastName(event.target.value)} sx={{ width: 192, mt: 1 }} color="primary" label={<Typography variant="body1" sx={{ display: 'inline' }}>نام خانوادگی</Typography>} variant="outlined" required helperText='' error={!ValidateRegex(lastName, regex.flName)} />
              <Button variant="contained" onClick={registerHandler} sx={{ mt: 1, mx: 'auto', display: 'block' }}>عضویت</Button>
            </>
          }
        </div>
      </div>
      <Snack context={contextSnack} severity="error" show={showSnack} handleCloseSnack={() => setShowSnack(false)} />
    </>
  )
}
