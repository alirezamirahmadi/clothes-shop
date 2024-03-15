import { useState, useEffect } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { useCookies } from "react-cookie";
// import { useSelector } from "react-redux";
// import type { RootState } from '../../Redux/Store';

// import { TextFieldBase } from "../../Components/CustomizedComponent/CutomizedTextField"
import BorderOne from "../../Components/Global/Border/BorderOne";
import { useLogin } from "../../Hooks/LoginHook";
// import Button from "../../Components/Global/Button/Button"

export default function Address(): React.JSX.Element {
  const [cookies, , ] = useCookies(['token']);
  const {data:userInfo} = useLogin(cookies.token);
  // const userInfo = useSelector((state: RootState) => state.login.userInfo)
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [province, setProvince] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [postCode, setPostCode] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [ePhone, setEPhone] = useState<string>('');
  const [firstNameCarry, setFirstNameCarry] = useState<string>('');
  const [lastNameCarry, setLastNameCarry] = useState<string>('');
  const [provinceCarry, setProvinceCarry] = useState<string>('');
  const [cityCarry, setCityCarry] = useState<string>('');
  const [addressCarry, setAddressCarry] = useState<string>('');
  const [phoneCarry, setPhoneCarry] = useState<string>('');
  const [postCodeCarry, setPostCodeCarry] = useState<string>('');
  const [emailCarry, setEmailCarry] = useState<string>('');
  const [ePhoneCarry, setEPhoneCarry] = useState<string>('');

  const saveChanges = () => {

  }

  useEffect(() => {
    setFirstName(userInfo[0]?.userInfo.firstName ? userInfo[0]?.userInfo?.firstName: '');
    setLastName(userInfo[0]?.userInfo.lastName ? userInfo[0]?.userInfo?.lastName: '');
    setProvince(userInfo[0]?.userInfo.province ? userInfo[0]?.userInfo?.province: '');
    setCity(userInfo[0]?.userInfo.city ? userInfo[0]?.userInfo?.city: '');
    setAddress(userInfo[0]?.userInfo.address ? userInfo[0]?.userInfo?.address: '');
    setPhone(userInfo[0]?.userInfo.phone ? userInfo[0]?.userInfo?.phone: '');
    setPostCode(userInfo[0]?.userInfo.postCode ? userInfo[0]?.userInfo?.postCode: '');
    setEmail(userInfo[0]?.userInfo.email ? userInfo[0]?.userInfo?.email: '');
    setEPhone(userInfo[0]?.userInfo.ePhone ? userInfo[0]?.userInfo?.ePhone: '');
  }, [])

  return (
    <>
      <div className="flex flex-wrap w-full gap-6">
        <BorderOne title='آدرس صورتحساب' className="max-w-md">
          <div className="flex flex-col p-3">
            <TextField value={firstName} onChange={event => setFirstName(event.target.value)} variant="outlined" label={<Typography variant="body1" >نام</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={lastName} onChange={event => setLastName(event.target.value)} variant="outlined" label={<Typography variant="body1" >نام خانوادگی</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={province} onChange={event => setProvince(event.target.value)} variant="outlined" label={<Typography variant="body1" >استان</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={city} onChange={event => setCity(event.target.value)} variant="outlined" label={<Typography variant="body1" >شهر</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={address} onChange={event => setAddress(event.target.value)} variant="outlined" label={<Typography variant="body1" >خیابان - کوچه - پلاک</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={phone} onChange={event => setPhone(event.target.value)} variant="outlined" label={<Typography variant="body1" >تلفن همراه</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={postCode} onChange={event => setPostCode(event.target.value)} variant="outlined" label={<Typography variant="body1" >کد پستی</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={email} onChange={event => setEmail(event.target.value)} variant="outlined" label={<Typography variant="body1" >آدرس ایمیل (اختیاری)</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={ePhone} onChange={event => setEPhone(event.target.value)} variant="outlined" label={<Typography variant="body1" >تلفن ضروری</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <Button variant='contained' onClick={saveChanges} sx={{ mt: 2 }}>ذخیره تغییرات</Button>
          </div>
        </BorderOne>
        <BorderOne title='آدرس حمل و نقل' className="max-w-md">
          <div className="flex flex-col p-3" >
            <TextField value={firstNameCarry} onChange={event => setFirstNameCarry(event.target.value)} variant="outlined" label={<Typography variant="body1" >نام</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={lastNameCarry} onChange={event => setLastNameCarry(event.target.value)} variant="outlined" label={<Typography variant="body1" >نام خانوادگی</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={provinceCarry} onChange={event => setProvinceCarry(event.target.value)} variant="outlined" label={<Typography variant="body1" >استان</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={cityCarry} onChange={event => setCityCarry(event.target.value)} variant="outlined" label={<Typography variant="body1" >شهر</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={addressCarry} onChange={event => setAddressCarry(event.target.value)} variant="outlined" label={<Typography variant="body1" >خیابان - کوچه - پلاک</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={phoneCarry} onChange={event => setPhoneCarry(event.target.value)} variant="outlined" label={<Typography variant="body1" >تلفن همراه</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={postCodeCarry} onChange={event => setPostCodeCarry(event.target.value)} variant="outlined" label={<Typography variant="body1" >کد پستی</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={emailCarry} onChange={event => setEmailCarry(event.target.value)} variant="outlined" label={<Typography variant="body1" >آدرس ایمیل (اختیاری)</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={ePhoneCarry} onChange={event => setEPhoneCarry(event.target.value)} variant="outlined" label={<Typography variant="body1" >تلفن ضروری</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <Button variant='contained' onClick={saveChanges} sx={{ mt: 2 }}>ذخیره تغییرات</Button>
          </div>
        </BorderOne>
      </div>
    </>
  )
}