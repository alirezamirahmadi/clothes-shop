import { useState } from "react";
import { Typography, useTheme } from "@mui/material";
import { TextFieldBase } from "../../Components/CustomizedComponent/CutomizedTextField";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { useDispatch } from "react-redux";
import type { AppDispatch } from '../../Redux/Store';

import Button from "../../Components/Global/Button/Button";
import Snack from "../../Components/Global/Snack/Snack";
import regex from "../../Utils/Regex";
import { ValidateRegex } from "../../Utils/Functions";
import { login } from "../../Redux/Reducer/LoginReucer";

export default function Login({closeDrawer}:{closeDrawer?:() => void}): React.JSX.Element {
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
    closeDrawer();
  }
  
  const registerHandler = () => {
    if (!ValidateRegex(phone, regex.phone) || !ValidateRegex(firstName, regex.flName) || !ValidateRegex(lastName, regex.flName)) {
      setContextSnack('اطلاعات وارد شده صحیح نمی باشد');
      setShowSnack(true);
      return;
    }
    dispatch(login({ isLogin: true, token: '123', userInfo: { firstName, lastName, phone } }))
    closeDrawer();
  }

  return (
    <>
      <div dir='rtl' className="w-80 h-screen border rounded-lg mx-auto my-2 py-12 " style={{ fontFamily: theme.typography.fontFamily }}>
        <div className="text-center">
          <LockOpenOutlinedIcon sx={{ fontSize: 80 }} color='mainColor' />
        </div>
        <div className="flex justify-center items-center w-full mb-2">
          <Typography variant="textbase" color={theme.palette.textColor.main}>{isRegister ? 'قبلا ثبت نام کرده‌اید؟' : 'حساب کاربری ندارید؟'}</Typography>
          <Button text={isRegister ? 'وارد شوید' : 'ثبت نام'} size="medium" className="px-1 py-1 mt-3 rounded" classStyle="button-second" clickHandler={() => setIsRegister(!isRegister)} />
        </div>
        <div className="px-16" style={{ color: theme.palette.textColor.main }}>
          <TextFieldBase value={phone} size="small" onChange={event => setPhone(event.target.value)} sx={{ width: 192, marginTop: 1 }} color="mainColor" label={<Typography variant="textbase" color={theme.palette.textColor.main}>شماره موبایل</Typography>} variant="outlined" required helperText='' error={!ValidateRegex(phone, regex.phone)} />
          {!isRegister ?
            <Button text='تایید' size="small" className="px-4 py-1 mt-4 rounded w-48" clickHandler={loginHandler} />
            :
            <>
              <TextFieldBase value={firstName} size="small" onChange={event => setFirstName(event.target.value)} sx={{ width: 192, marginTop: 1 }} color="mainColor" label={<Typography variant="textbase" color={theme.palette.textColor.main}>نام</Typography>} variant="outlined" required helperText='' error={!ValidateRegex(firstName, regex.flName)} />
              <TextFieldBase value={lastName} size="small" onChange={event => setLastName(event.target.value)} sx={{ width: 192, marginTop: 1 }} color="mainColor" label={<Typography variant="textbase" color={theme.palette.textColor.main}>نام خانوادگی</Typography>} variant="outlined" required helperText='' error={!ValidateRegex(lastName, regex.flName)} />
              <Button text='عضویت' size="small" className="px-4 py-1 mt-4 rounded w-48" clickHandler={registerHandler} />
            </>
          }
        </div>
      </div>
      <Snack context={contextSnack} severity="error" show={showSnack} handleCloseSnack={() => setShowSnack(false)} />
    </>
  )
}
