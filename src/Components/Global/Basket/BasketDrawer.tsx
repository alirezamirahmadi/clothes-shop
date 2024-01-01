
import { useNavigate } from 'react-router-dom';
import { Typography, Divider, useTheme } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux";
import type { RootState } from '../../../Redux/Store'

import ProductHCard from "../Products/ProductHCard"
import Button from '../Button/Button';
import Toman from '../Utility/Toman';
import { BasketType } from '../../../Utils/Types';
// import { BasketData } from "../../../Utils/Datas"

export default function BasketDrawer({closeDrawer}:{closeDrawer:() => void}):React.JSX.Element {
  let sum = 0;
  const navigate = useNavigate();
  const theme = useTheme();
  const basketList = useSelector((state:RootState) => state.basket);

  const sumAll = (price: number) => {
    sum += price;
  }
  const openBasket = () => {
    navigate('/purchase/basket');
    closeDrawer();
  }
  const openCheckout = () => {
    navigate('/purchase/checkout');
    closeDrawer();
  }
  return (
    <>
      <div dir='rtl' className="w-80 h-screen">
        <div className="mb-4 text-center">
          <ShoppingCartOutlinedIcon sx={{ fontSize: 60 }} color='mainColor' />
          <Divider variant='middle'/>
        </div>
        <div className="overflow-y-scroll h-96">
          {
            basketList.map((basket:BasketType) => (
              <>
                {sumAll(basket.price * basket.count)}
                <ProductHCard key={basket.code} {...basket} showType='col-basket' />
              </>
            ))
          }
        </div>
        <div className="fixed bottom-0 py-3 w-80" style={{backgroundColor:theme.palette.secondColor.main}}>
          <div className="flex flex-col justify-center mx-3">
            <Typography color={theme.palette.textColor.main} variant="text2xl">جمع: {sum} {<Toman color='textColor'/>}</Typography>
            <Button text='مشاهده سبد خرید' size='medium' className='w-72 rounded-md text-center pt-3 mt-2' clickHandler={openBasket} />
            <Button text='تسویه حساب' size='medium' className='w-72 rounded-md text-center pt-3 mt-2' clickHandler={openCheckout} />
          </div>
        </div>
      </div>
    </>
  )
}