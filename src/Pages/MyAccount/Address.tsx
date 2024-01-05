import { useState, useEffect } from "react"
import { useTheme, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import type { RootState } from '../../Redux/Store'

import { TextFieldBase } from "../../Components/CustomizedComponent/CutomizedTextField"
import BorderOne from "../../Components/Global/Border/BorderOne"
import Button from "../../Components/Global/Button/Button"

export default function Address(): React.JSX.Element {
  const theme = useTheme();
  const userInfo = useSelector((state: RootState) => state.login.userInfo)
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [province, setProvince] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [postCode, setPostCode] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [ePhone, setEPhone] = useState<string>('')
  const [firstNameCarry, setFirstNameCarry] = useState<string>('')
  const [lastNameCarry, setLastNameCarry] = useState<string>('')
  const [provinceCarry, setProvinceCarry] = useState<string>('')
  const [cityCarry, setCityCarry] = useState<string>('')
  const [addressCarry, setAddressCarry] = useState<string>('')
  const [phoneCarry, setPhoneCarry] = useState<string>('')
  const [postCodeCarry, setPostCodeCarry] = useState<string>('')
  const [emailCarry, setEmailCarry] = useState<string>('')
  const [ePhoneCarry, setEPhoneCarry] = useState<string>('')

  const saveChanges = () => {

  }

  useEffect(() => {
    setFirstName(userInfo?.firstName);
    setLastName(userInfo?.lastName);
    setProvince(userInfo?.province);
    setCity(userInfo?.city);
    setAddress(userInfo?.address);
    setPhone(userInfo?.phone);
    setPostCode(userInfo?.postCode);
    setEmail(userInfo?.email);
    setEPhone(userInfo?.ePhone);
  }, [])

  return (
    <>
      <div className="flex flex-wrap w-full">
        <BorderOne title='آدرس صورتحساب' className="max-w-md">
          <div className="flex flex-col p-3" style={{ color: theme.palette.textColor.main }}>
            <TextFieldBase value={firstName} onChange={event => setFirstName(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>نام</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={lastName} onChange={event => setLastName(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>نام خانوادگی</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={province} onChange={event => setProvince(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>استان</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={city} onChange={event => setCity(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>شهر</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={address} onChange={event => setAddress(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>خیابان - کوچه - پلاک</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={phone} onChange={event => setPhone(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>تلفن همراه</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={postCode} onChange={event => setPostCode(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>کد پستی</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={email} onChange={event => setEmail(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>آدرس ایمیل (اختیاری)</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={ePhone} onChange={event => setEPhone(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>تلفن ضروری</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <Button text='ذخیره تغییرات' size='small' className="px-3 pt-1 mt-4 rounded-md" clickHandler={saveChanges} />
          </div>
        </BorderOne>
        <BorderOne title='آدرس حمل و نقل' className="max-w-md">
          <div className="flex flex-col p-3" style={{ color: theme.palette.textColor.main }}>
            <TextFieldBase value={firstNameCarry} onChange={event => setFirstNameCarry(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>نام</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={lastNameCarry} onChange={event => setLastNameCarry(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>نام خانوادگی</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={provinceCarry} onChange={event => setProvinceCarry(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>استان</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={cityCarry} onChange={event => setCityCarry(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>شهر</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={addressCarry} onChange={event => setAddressCarry(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>خیابان - کوچه - پلاک</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={phoneCarry} onChange={event => setPhoneCarry(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>تلفن همراه</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={postCodeCarry} onChange={event => setPostCodeCarry(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>کد پستی</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={emailCarry} onChange={event => setEmailCarry(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>آدرس ایمیل (اختیاری)</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={ePhoneCarry} onChange={event => setEPhoneCarry(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>تلفن ضروری</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <Button text='ذخیره تغییرات' size='small' className="px-3 pt-1 mt-4 rounded-md" clickHandler={saveChanges} />
          </div>
        </BorderOne>
      </div>
    </>
  )
}