import { useRef, useState, useContext, useEffect } from "react";
import { Typography, useTheme, Box } from "@mui/material";

import { TextFieldBase } from "../../Components/CustomizedComponent/CutomizedTextField";
// import ReCAPTCHA from "react-google-recaptcha";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

// import AuthContext from "../../Contexts/authContext";
// import TextBox from "../../Components/Global/TextBox/TextBox";
import Button from "../../Components/Global/Button/Button";
import Snack from "../../Components/Global/Snack/Snack";
// import { apiAddress } from '../../Datas'
// import { ButtonMain } from "../../Components/CustomizedComponent/CustomizedButton";
import regex from "../../Utils/Regex";
import { ValidateRegex } from "../../Utils/Functions";
// import { getLoginFromServer, loginToServer, registerToServer } from "../../Redux/Reducer/Login";

export default function Login({ login }: { login: boolean }): React.JSX.Element {
  // const authContext = useContext(AuthContext)
  // const dispatch = useDispatch()
  const theme = useTheme();
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const [isRegister, setIsRegister] = useState(false)
  const [showSnack, setShowSnack] = useState(false)
  const [contextSnack, setContextSnack] = useState('')
  
  const clearTextboxs = () => {
    setUsername('');
    setPassword('');
    setEmail('');
  }
  // const hasValidation = () => {
  //   return Boolean(username.current.getAttribute('hasvalidation')) &&
  //     Boolean(password.current.getAttribute('hasvalidation')) &&
  //     Boolean(email.current.getAttribute('hasvalidation')) &&
  // }

  const loginHandler = () => {
    if(!ValidateRegex(phone, regex.phone)){
      setContextSnack('شماره موبایل وارد شده صحیح نمی باشد');
      setShowSnack(true);
      return;
    }
    // const user = {
    //   identifier: username.current.value,
    //   password: password.current.value,
    // }
    // dispatch(loginToServer(user))
    //   .then(res => {
    //     localStorage.setItem('user', JSON.stringify(res.payload.accessToken))
    //     dispatch(getLoginFromServer(res.payload.accessToken))
    //   })
  }

  // *** Register
  const registerHandler = () => {
    // if (!hasValidation()) {
    //   console.log('not valid');
    //   return
    // }
    // const newUser = {
    //   username: username.current.value,
    //   email: email.current.value,
    //   password: password.current.value,
    // }
    // dispatch(registerToServer(newUser))
    //   .then(res => {
    //     localStorage.setItem('user', JSON.stringify(res.payload.accessToken))
    //     dispatch(getLoginFromServer(res.payload.accessToken))
    //   })
  }

  return (
    <>
      <div dir='rtl' className="w-80 h-screen border rounded-lg mx-auto my-2 py-12 " style={{ fontFamily: theme.typography.fontFamily }}>
        <div className="text-center">
          <LockOpenOutlinedIcon sx={{ fontSize: 80 }} color='mainColor'/>
        </div>
        <div className="flex justify-center items-center w-full mb-2">
          <Typography variant="textbase" color={theme.palette.textColor.main}>{isRegister ? 'قبلا ثبت نام کرده‌اید؟' : 'حساب کاربری ندارید؟'}</Typography>
          <Button text={isRegister ? 'وارد شوید' : 'ثبت نام'} size="medium" className="px-1 py-1 mt-3 rounded" classStyle="button-second" clickHandler={() => setIsRegister(!isRegister)} />
        </div>
        <div className="px-16" style={{color:theme.palette.textColor.main}}>
          <TextFieldBase value={phone} size="small" onChange={event => setPhone(event.target.value)} sx={{ width: 192, marginTop: 1 }} color="mainColor" label={<Typography variant="textbase" color={theme.palette.textColor.main}>شماره موبایل</Typography>} variant="outlined" required helperText='' error={!ValidateRegex(phone, regex.phone)} />
          {!isRegister ?
            <Button text='تایید' size="small" className="px-4 py-1 mt-4 rounded w-48" clickHandler={loginHandler} />
            :
            <>
              <TextFieldBase value={username} size="small" onChange={event => setUsername(event.target.value)} sx={{ width: 192, marginTop: 1 }} color="mainColor" label={<Typography variant="textbase" color={theme.palette.textColor.main}>نام کاربری</Typography>} variant="outlined" required helperText='' error={!ValidateRegex(username, regex.username)} />
              <TextFieldBase value={password} size="small" onChange={event => setPassword(event.target.value)} sx={{ width: 192, marginTop: 1 }} color="mainColor" label={<Typography variant="textbase" color={theme.palette.textColor.main}>رمز عبور</Typography>} variant="outlined" required helperText='' error={!ValidateRegex(password, regex.password)} type="password" />
              <TextFieldBase value={email} size="small" onChange={event => setEmail(event.target.value)} sx={{ width: 192, marginTop: 1 }} color="mainColor" label={<Typography variant="textbase" color={theme.palette.textColor.main}>آدرس ایمیل</Typography>} variant="outlined" required helperText='' error={!ValidateRegex(email, regex.email)} />
              <Button text='عضویت' size="small" className="px-4 py-1 mt-4 rounded w-48" clickHandler={registerHandler} />
            </>
          }
        </div>
      </div>
      <Snack context={contextSnack} severity="error" show={showSnack} handleCloseSnack={() => setShowSnack(false)}/>
    </>
  )
}
{/* <div className="mt-2">
              <input type="checkbox" name="" id="chbRememberMe" />
              <label htmlFor="chbRememberMe">مرا بخاطر بسپار</label>
            </div> */}