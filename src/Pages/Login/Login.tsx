import { useState, useEffect } from "react";
import { Typography, useTheme, TextField, Button } from "@mui/material";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from '../../Redux/Store';

import Snack from "../../Components/Global/Snack/Snack";
import regex from "../../Utils/Regex";
import { ValidateRegex } from "../../Utils/Functions";
import { postLogin, getLogin } from "../../Redux/Reducer/LoginReucer";
import OTPInput from "../../Components/CustomizedComponent/OTPInput";
import { useUser, useMutationUser } from "../../Hooks/UserHook";
// import { useMutationLogin } from "../../Hooks/LoginHook";
import { getBasket } from '../../Redux/Reducer/BasketReducer';
import { getFavorite } from '../../Redux/Reducer/FavoriteReducer';

export default function Login({ closeDrawer }: { closeDrawer?: () => void }): React.JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const loginInfo = useSelector((state: RootState) => state.login);
  const theme = useTheme();
  const [phone, setPhone] = useState<string>('');
  const { data: userInfo } = useUser(phone);
  const { mutate: addUser } = useMutationUser("POST");
  // const { mutate: addLogin, data: loginData } = useMutationLogin('POST');
  const [, setCookie,] = useCookies(['token']);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [showSnack, setShowSnack] = useState<boolean>(false);
  const [contextSnack, setContextSnack] = useState<string>('');
  const [sendMessage, setSendMessage] = useState<boolean>(false);
  const [oneTimePassword, setOneTimePassword] = useState<string>('');

  const loginHandler = () => {
    if (!ValidateRegex(phone, regex.phone)) {
      showMessage('شماره موبایل وارد شده صحیح نمی باشد');
      return;
    }
    userInfo?.length > 0 ? setSendMessage(true) : showMessage('شما قبلا ثبت نام نکرده اید');
  }

  const showMessage = (message: string) => {
    setContextSnack(message);
    setShowSnack(true);
  }

  const verifyOneTimePassword = () => {
    if (oneTimePassword === '11111') {
      dispatch(postLogin(userInfo[0])).then(() => {
        dispatch(getLogin(userInfo[0]?.phone ?? '0'));
      })
      // dispatch(getBasket(userInfo[0]?.id ?? '0'));
      // dispatch(getFavorite(userInfo[0]?.id ?? '0'));
      setCookie('token', userInfo[0]?.phone ?? '0');
      closeDrawer && closeDrawer();
    }
  }

  const registerHandler = () => {
    if (!ValidateRegex(phone, regex.phone) || !ValidateRegex(firstName, regex.flName) || !ValidateRegex(lastName, regex.flName)) {
      showMessage('اطلاعات وارد شده صحیح نمی باشد');
      return;
    }
    addUser({ id: phone, firstName, lastName, phone });
    // dispatch(login({ isLogin: true, token: '123', userInfo: { firstName, lastName, phone } }))
    closeDrawer && closeDrawer();
  }

  useEffect(() => {
    // send message
  }, [sendMessage])

  // useEffect(()=>{
  //   setCookie('token', loginData?.data?.token);
  //   if(loginData){

  //   } 
  // }, [loginData])

  // useEffect(() => {
  //   // basketList && dispatch(addToBasket(basketList));
  // }, [isFetched])

  return (
    <>
      <div dir='rtl' className="w-80 h-screen mx-auto py-12 " style={{ fontFamily: theme.typography.fontFamily }}>
        <div className="text-center">
          <LockOpenOutlinedIcon sx={{ fontSize: 80 }} color='primary' />
        </div>
        {!sendMessage &&
          <div className="flex justify-center items-center w-full mb-2">
            <Typography variant="body1" >{isRegister ? 'قبلا ثبت نام کرده‌اید؟' : 'حساب کاربری ندارید؟'}</Typography>
            <Button onClick={() => setIsRegister(!isRegister)} >{isRegister ? 'وارد شوید' : 'ثبت نام'}</Button>
          </div>
        }
        <div className={"flex flex-col items-center gap-2 " + (sendMessage && "mt-12")}>
          {sendMessage ?
            <OTPInput separator={<span>-</span>} value={oneTimePassword} onChange={setOneTimePassword} length={5} />
            : <TextField value={phone} size="small" onChange={event => setPhone(event.target.value)} sx={{ width: 192, mt: 1 }} color="primary" label={<Typography variant="body1" sx={{ display: 'inline' }}>شماره موبایل</Typography>} variant="outlined" required helperText='' error={!ValidateRegex(phone, regex.phone)} />
          }
          {!isRegister ?
            <Button variant="contained" onClick={sendMessage ? verifyOneTimePassword : loginHandler} sx={{ mt: 1, mx: 'auto', display: 'block' }}>تایید</Button>
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
