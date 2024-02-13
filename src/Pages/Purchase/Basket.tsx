import { useState, useEffect } from 'react';
import { Typography, useTheme, Divider, TextField, Button } from '@mui/material';
import { useSelector } from "react-redux";
import type { RootState } from '../../Redux/Store';

import ProductHCard from "../../Components/Global/Products/ProductHCard";
import Toman from '../../Components/Global/Utility/Toman';
import { BasketType } from '../../Utils/Types';

export default function Basket(): React.JSX.Element {
  const [productList, setProductList] = useState<BasketType[]>([]);
  const [sumPrice, setSumPrice] = useState<number>(0)
  const [sumOff, setSumOff] = useState<number>(0)
  const [carryCost,] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)
  const [offCode, setOffCode] = useState<string>('')
  const theme = useTheme();
  const basketList = useSelector((state: RootState) => state.basket)

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

  return (
    <>
      <div dir='rtl' className="lg:flex justify-between mt-2">
        <div className="my-3 mx-5 p-3 lg:w-3/5 shadow-md rounded-2xl" style={{ backgroundColor: theme.palette.secondColor.main }}>
          {
            productList.map(basket => (
              <ProductHCard key={basket.id} {...basket} showType='row-basket' />
            ))
          }
          <div className="flex justify-between px-3">
            <div className="flex ">
              <TextField value={offCode} onChange={event => setOffCode(event.target.value)} variant="outlined" label={<Typography variant="body1" >کد تخفیف</Typography>} size="small" color="primary" />
              <Button variant='contained' onClick={Checkout} sx={{ marginInlineStart: 2 }}>اعمال کد تخفیف</Button>
            </div>
            <Button variant='contained' onClick={Checkout} sx={{ marginInlineStart: 2 }}>بروز رسانی سبد خرید</Button>
          </div>
        </div>
        <div className="my-3 ms-5 lg:ms-0 me-5 py-4 px-6 shadow-md rounded-2xl lg:w-2/5 h-fit" style={{ backgroundColor: theme.palette.secondColor.main }}>
          <Typography variant='h6' >جمع کل سبد خرید</Typography>
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
          <Button variant='contained' onClick={Checkout} sx={{ mt: 1, mx:'auto', display:'block'}}>ادامه جهت تسویه حساب</Button>
        </div>
      </div>
    </>
  )
}