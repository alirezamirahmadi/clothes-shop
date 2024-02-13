import { useState, useEffect } from 'react';
import { Box, useTheme, Button } from '@mui/material';
import { useParams } from 'react-router-dom';

import Basket from "./Basket";
import Checkout from "./Checkout";
import BorderOne from '../../Components/Global/Border/BorderOne';

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
      <Box className="my-auto py-5" sx={{ backgroundColor: theme.palette.thirdColor.light }}>
        <BorderOne>
          <div className="flex justify-center mb-2">
            <Button variant={showItem === 'basket' ? 'contained' : 'outlined'} onClick={handleBasket} sx={{marginInlineStart:2}}>سبد خرید</Button>
            <Button variant={showItem === 'checkout' ? 'contained' : 'outlined'} onClick={handleCheckout} sx={{marginInlineStart:2}}>تسویه حساب</Button>
            <Button variant={showItem === 'complete' ? 'contained' : 'outlined'} onClick={handleBasket} sx={{marginInlineStart:2}}>تکمیل سفارش</Button>
          </div>
        </BorderOne>
        {showItem === 'basket' && <Basket />}
        {showItem === 'checkout' && <Checkout />}
      </Box>
    </>
  )
}