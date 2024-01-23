import { useState, useEffect } from 'react'
import { Typography, useTheme, Divider } from '@mui/material'
import { useSelector } from "react-redux";
import type { RootState } from '../../Redux/Store'

import ProductHCard from "../../Components/Global/Products/ProductHCard"
import Button from '../../Components/Global/Button/Button'
import Toman from '../../Components/Global/Utility/Toman'
import { TextFieldBase } from '../../Components/CustomizedComponent/CutomizedTextField'
import { BasketType } from '../../Utils/Types'

export default function Basket(): React.JSX.Element {
  const [productList, setProductList] = useState<BasketType[]>([]);
  const [sumPrice, setSumPrice] = useState<number>(0)
  const [sumOff, setSumOff] = useState<number>(0)
  const [carryCost, setCarryCost] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)
  const [offCode, setOffCode] = useState<string>('')
  const theme = useTheme();
  const basketList = useSelector((state:RootState) => state.basket)

  const Checkout = () => {

  }

  useEffect(() => {
    setProductList(basketList);

    let sum = 0;
    let off = 0;
    basketList.map((basket:BasketType) => {
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
      <div dir='rtl' className="lg:flex justify-between mt-4">
        <div className="m-3 p-3 lg:w-3/5 rounded-md" style={{ backgroundColor: theme.palette.secondColor.main }}>
          {
            productList.map(basket => (
              <ProductHCard key={basket.id} {...basket} showType='row-basket' />
            ))
          }
          <div className="flex justify-between px-3">
            <div className="flex " style={{color:theme.palette.textColor.main}}>
              <TextFieldBase value={offCode} onChange={event => setOffCode(event.target.value)} variant="outlined" label={<Typography variant="textbase" color={theme.palette.textColor.main}>کد تخفیف</Typography>} size="small" color="mainColor" />
              <Button text='اعمال کد تخفیف' size='small' className='text-center rounded-md px-4 pt-1 ms-2 mt-1' clickHandler={Checkout} />
            </div>
            <Button text='بروز رسانی سبد خرید' size='small' className='text-center rounded-md px-4 pt-1 ms-2 mt-1' clickHandler={Checkout} />
          </div>
        </div>
        <div className="mx-3 my-7 py-4 px-6 border shadow-md rounded-md lg:w-2/5 h-fit" style={{ backgroundColor: theme.palette.secondColor.main }}>
          <Typography variant='textxl' color={theme.palette.textColor.main}>جمع کل سبد خرید</Typography>
          <div className="flex justify-between my-3">
            <Typography variant='textsm' color={theme.palette.textColor.main}>جمع جز</Typography>
            <Typography variant='textsm' color={theme.palette.textColor.main}>{sumPrice.toLocaleString()}{<Toman color='textColor'/>}</Typography>
          </div>
          <Divider />
          <div className="flex justify-between my-3">
            <Typography variant='textsm' color={theme.palette.textColor.main}>حمل و نقل</Typography>
            <Typography variant='textsm' color={theme.palette.textColor.main}>{carryCost.toLocaleString()}{<Toman color='textColor'/>}</Typography>
          </div>
          <Divider />
          <div className="flex justify-between my-3">
            <Typography variant='textlg' color={theme.palette.textColor.main}>مجموع</Typography>
            <Typography variant='textxl' color={theme.palette.textColor.main}>{total.toLocaleString()}{<Toman color='textColor'/>}</Typography>
          </div>
          {sumOff && <div className="flex justify-between my-3">
            <Typography variant='textlg' color={theme.palette.mainColor.main}>سود شما از خرید</Typography>
            <Typography variant='textxl' color={theme.palette.mainColor.main}>{sumOff.toLocaleString()}{<Toman color='mainColor'/>}</Typography>
          </div>}
          <Button text='ادامه جهت تسویه حساب' size='medium' className='w-full text-center rounded-md pt-3 mt-2' clickHandler={Checkout} />
        </div>
      </div>
    </>
  )
}