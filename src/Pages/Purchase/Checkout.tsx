// import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Typography, useTheme, Divider, TextField, Button } from '@mui/material';
import { useSelector } from "react-redux";
import type { RootState } from '../../Redux/Store';

import Toman from '../../Components/Global/Utility/Toman';
// import Button from '../../Components/Global/Button/Button'
import BorderTwo from '../../Components/Global/Border/BorderTwo';
// import { TextFieldBase } from '../../Components/CustomizedComponent/CutomizedTextField'
import { BasketType } from '../../Utils/Types'
// import { useBasket } from '../../Hooks/BasketHook';

export default function Checkout(): React.JSX.Element {
  // const { data: basketList } = useBasket("1");
  const [productList, setProductList] = useState<BasketType[]>([]);
  const [sumPrice, setSumPrice] = useState<number>(0);
  const [carryCost,] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [province, setProvince] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [postCode, setPostCode] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [ePhone, setEPhone] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [sumOff, setSumOff] = useState<number>(0);
  const theme = useTheme();
  const basketList = useSelector((state: RootState) => state.basket);
  const userInfo = useSelector((state: RootState) => state.login.userInfo);

  const Checkout = () => {

  }

  useEffect(() => {
    setProductList(basketList);
    let sum = 0;
    let off = 0;
    basketList?.map((basket: BasketType) => {
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
    setFirstName(userInfo?.firstName ?? '');
    setLastName(userInfo?.lastName ?? '');
    setProvince(userInfo?.province ?? '');
    setCity(userInfo?.city ?? '');
    setAddress(userInfo?.address ?? '');
    setPhone(userInfo?.phone ?? '');
    setPostCode(userInfo?.postCode ?? '');
    setEmail(userInfo?.email ?? '');
    setEPhone(userInfo?.ePhone ?? '');
    setDescription(userInfo?.description ?? '');
  }, [])

  return (
    <>
      <div dir='rtl' className="lg:flex justify-between mt-4">
        <div className="my-3 mx-5 lg:w-3/5 rounded-2xl shadow-md p-3" style={{ backgroundColor: theme.palette.secondColor.main }}>
          <div className="mb-3">
            <Typography variant='body2' component='p' >کد تخفیف دارید؟ برای نوشتن کد به سبد خرید بازگردید</Typography>
          </div>
          <BorderTwo title='مشخصات' />
          <div className="flex flex-col px-3">
            <TextField value={firstName} onChange={event => setFirstName(event.target.value)} variant="outlined" label={<Typography variant="body1" >نام</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={lastName} onChange={event => setLastName(event.target.value)} variant="outlined" label={<Typography variant="body1" >نام خانوادگی</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={province} onChange={event => setProvince(event.target.value)} variant="outlined" label={<Typography variant="body1" >استان</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={city} onChange={event => setCity(event.target.value)} variant="outlined" label={<Typography variant="body1" >شهر</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={address} onChange={event => setAddress(event.target.value)} variant="outlined" label={<Typography variant="body1" >خیابان - کوچه - پلاک</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={phone} onChange={event => setPhone(event.target.value)} variant="outlined" label={<Typography variant="body1" >تلفن همراه</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={postCode} onChange={event => setPostCode(event.target.value)} variant="outlined" label={<Typography variant="body1" >کد پستی</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={email} onChange={event => setEmail(event.target.value)} variant="outlined" label={<Typography variant="body1" >آدرس ایمیل (اختیاری)</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={ePhone} onChange={event => setEPhone(event.target.value)} variant="outlined" label={<Typography variant="body1" >تلفن ضروری</Typography>} size="small" color="primary" sx={{ marginTop: 2 }} />
            <TextField value={description} onChange={event => setDescription(event.target.value)} variant="outlined" label={<Typography variant="body1" >توضیحات سفارش</Typography>} multiline rows={4} size="small" color="primary" sx={{ marginTop: 2 }} />
          </div>
        </div>

        <div className="my-3 me-5 ms-5 lg:ms-0 py-4 px-6 shadow-md rounded-2xl lg:w-2/5 h-fit" style={{ backgroundColor: theme.palette.secondColor.main }}>
          <BorderTwo title='سفارش شما' />
          {
            productList.map(basket => (
              <div key={basket.id} className="flex justify-between my-3">
                <Typography variant='body2' >{basket.title} * {basket.count}</Typography>
                <Typography variant='body2' >{(basket.price * basket.count).toLocaleString()} تومان</Typography>
              </div>
            ))
          }
          <Divider />
          <div className="flex justify-between my-3">
            <Typography variant='body2' >جمع جز</Typography>
            <Typography variant='body2' >{sumPrice.toLocaleString()}{<Toman color='inherit' />}</Typography>
          </div>
          <Divider />
          <div className="flex justify-between my-3">
            <Typography variant='body2' >حمل و نقل</Typography>
            <Typography variant='body2' >{carryCost.toLocaleString()}{<Toman color='inherit' />}</Typography>
          </div>
          <Divider />
          <div className="flex justify-between my-3">
            <Typography variant='body1' >مجموع</Typography>
            <Typography variant='h6' >{total.toLocaleString()}{<Toman color='inherit' />}</Typography>
          </div>
          {sumOff && <div className="flex justify-between my-3">
            <Typography variant='body1' color={theme.palette.mainColor.main}>سود شما از خرید</Typography>
            <Typography variant='h6' color={theme.palette.mainColor.main}>{sumOff.toLocaleString()}{<Toman color='inherit' />}</Typography>
          </div>}
          {/* <Button text='ثبت سفارش' size='medium' className='w-full text-center rounded-md pt-3 mt-2' clickHandler={Checkout} /> */}
          <Button variant='contained' onClick={Checkout} sx={{ mx: 'auto', display: 'block' }}>ثبت سفارش</Button>
        </div>
      </div>
    </>
  )
}