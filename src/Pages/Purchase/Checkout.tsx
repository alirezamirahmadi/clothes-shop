import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Typography, useTheme, Divider } from '@mui/material'
import { useSelector } from "react-redux";
import type { RootState } from '../../Redux/Store'

import Toman from '../../Components/Global/Utility/Toman'
import Button from '../../Components/Global/Button/Button'
import BorderTwo from '../../Components/Global/Border/BorderTwo'
import { TextFieldBase } from '../../Components/CustomizedComponent/CutomizedTextField'
import { BasketType } from '../../Utils/Types'

export default function Checkout(): React.JSX.Element {
  const [productList, setProductList] = useState<BasketType[]>([]);
  const [sumPrice, setSumPrice] = useState<number>(0)
  const [carryCost, setCarryCost] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [province, setProvince] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [postCode, setPostCode] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [ePhone, setEPhone] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [sumOff, setSumOff] = useState<number>(0)
  const theme = useTheme();
  const basketList = useSelector((state: RootState) => state.basket)
  const userInfo = useSelector((state: RootState) => state.login.userInfo)

  const Checkout = () => {

  }

  useEffect(() => {
    setProductList(basketList);
    let sum = 0;
    let off = 0;
    basketList.map((basket: BasketType) => {
      sum += basket.price * basket.count;
      basket.off && (off += Math.ceil((basket.price * basket.off / 100) * basket.count));
    })
    setSumPrice(sum);
    setSumOff(off);
  }, [basketList])

  useEffect(() => {
    setTotal(sumPrice + carryCost);
  }, [sumPrice, carryCost])

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
    setDescription(userInfo?.description);
  }, [])

  return (
    <>
      <div dir='rtl' className="lg:flex justify-between mt-4">
        <div className="m-3 lg:w-3/5 rounded-md p-3" style={{ backgroundColor: theme.palette.secondColor.main }}>
          <div className="mb-3">
            <Typography variant='textsm' component='p' color={theme.palette.textColor.main}>کد تخفیف دارید؟ برای نوشتن کد به سبد خرید بازگردید</Typography>
          </div>
          <BorderTwo title='مشخصات' />
          <div className="flex flex-col px-3" style={{ color: theme.palette.textColor.main }}>
            <TextFieldBase value={firstName} onChange={event => setFirstName(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>نام</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={lastName} onChange={event => setLastName(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>نام خانوادگی</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={province} onChange={event => setProvince(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>استان</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={city} onChange={event => setCity(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>شهر</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={address} onChange={event => setAddress(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>خیابان - کوچه - پلاک</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={phone} onChange={event => setPhone(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>تلفن همراه</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={postCode} onChange={event => setPostCode(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>کد پستی</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={email} onChange={event => setEmail(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>آدرس ایمیل (اختیاری)</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={ePhone} onChange={event => setEPhone(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>تلفن ضروری</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
            <TextFieldBase value={description} onChange={event => setDescription(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>توضیحات سفارش</Typography>} multiline rows={4} size="small" color="mainColor" sx={{ marginTop: 2 }} />
          </div>
        </div>

        <div className="mx-3 my-7 py-4 px-6 border shadow-md rounded-md lg:w-2/5 h-fit" style={{ backgroundColor: theme.palette.secondColor.main }}>
          <BorderTwo title='سفارش شما' />
          {
            productList.map(basket => (
              <div key={basket.id} className="flex justify-between my-3">
                <Typography variant='textsm' color={theme.palette.textColor.main}>{basket.title} * {basket.count}</Typography>
                <Typography variant='textsm' color={theme.palette.textColor.main}>{(basket.price * basket.count).toLocaleString()} تومان</Typography>
              </div>
            ))
          }
          <Divider />
          <div className="flex justify-between my-3">
            <Typography variant='textsm' color={theme.palette.textColor.main}>جمع جز</Typography>
            <Typography variant='textsm' color={theme.palette.textColor.main}>{sumPrice.toLocaleString()}{<Toman color='mainColor' />}</Typography>
          </div>
          <Divider />
          <div className="flex justify-between my-3">
            <Typography variant='textsm' color={theme.palette.textColor.main}>حمل و نقل</Typography>
            <Typography variant='textsm' color={theme.palette.textColor.main}>{carryCost.toLocaleString()}{<Toman color='mainColor' />}</Typography>
          </div>
          <Divider />
          <div className="flex justify-between my-3">
            <Typography variant='textlg' color={theme.palette.textColor.main}>مجموع</Typography>
            <Typography variant='textxl' color={theme.palette.textColor.main}>{total.toLocaleString()}{<Toman color='mainColor' />}</Typography>
          </div>
          {sumOff && <div className="flex justify-between my-3">
            <Typography variant='textlg' color={theme.palette.mainColor.main}>سود شما از خرید</Typography>
            <Typography variant='textxl' color={theme.palette.mainColor.main}>{sumOff.toLocaleString()}{<Toman color='mainColor' />}</Typography>
          </div>}
          <Button text='ثبت سفارش' size='medium' className='w-full text-center rounded-md pt-3 mt-2' clickHandler={Checkout} />
        </div>
      </div>
    </>
  )
}