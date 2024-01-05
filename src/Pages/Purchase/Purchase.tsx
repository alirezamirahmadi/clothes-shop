import { useState, useEffect } from 'react';
import { Box, useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';

import Basket from "./Basket";
import Checkout from "./Checkout";
import BorderOne from '../../Components/Global/Border/BorderOne'
import Button from '../../Components/Global/Button/Button';

export default function Purchase(): React.JSX.Element {
  const [showItem, setShowItem] = useState<string>('basket');
  const theme = useTheme();
  const tabParams = useParams();
  const handleBasket = () => {
    setShowItem('basket');
  }
  const handleCheckout = () => {
    setShowItem('checkout');
  }

  useEffect(() => {
    tabParams.tab && setShowItem(tabParams.tab);
  }, [tabParams])
  return (
    <>
      <Box className="my-auto pt-1" sx={{ backgroundColor: theme.palette.thirdColor.light }}>
        <BorderOne>
          <div className="flex justify-center mb-2">
            <Button text='سبد خرید' size='medium' className='text-center pt-2 px-5 border rounded-md ms-4' clickHandler={handleBasket} classStyle={showItem === 'basket' ? 'button-main' : 'button-second'} />
            <Button text='تسویه حساب' size='medium' className='text-center pt-2 px-5 border rounded-md ms-4' clickHandler={handleCheckout} classStyle={showItem === 'checkout' ? 'button-main' : 'button-second'} />
            <Button text='تکمیل سفارش' size='medium' className='text-center pt-2 px-5 border rounded-md ms-4' clickHandler={handleBasket} classStyle={showItem === 'complete' ? 'button-main' : 'button-second'} />
          </div>
        </BorderOne>
        {showItem === 'basket' && <Basket />}
        {showItem === 'checkout' && <Checkout />}
      </Box>
    </>
  )
}