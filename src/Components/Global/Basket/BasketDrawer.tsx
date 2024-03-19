import { useNavigate } from 'react-router-dom';
import { Typography, Divider, useTheme, Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux";
import type { RootState } from '../../../Redux/Store';

import ProductHCard from "../Products/ProductHCard";
import Toman from '../Utility/Toman';
import { BasketType } from '../../../Utils/Types';
// import { useBasket } from '../../../Hooks/BasketHook';

export default function BasketDrawer({ closeDrawer }: { closeDrawer: () => void }): React.JSX.Element {
  let sum = 0;
  const navigate = useNavigate();
  const theme = useTheme();
  // const loginInfo = useSelector((state: RootState) => state.login);
  // const { data: basketList } = useBasket(loginInfo ? loginInfo.userInfo?.id : '-1');
  const basketList = useSelector((state: RootState) => state.basket);

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
          <ShoppingCartOutlinedIcon sx={{ fontSize: 60 }} color='primary' />
          <Divider variant='middle' />
        </div>
        <div className="overflow-y-scroll h-96">
          {
            basketList?.map((basket: BasketType) => (
              <span key={basket.code}>
                <>
                  {sumAll(basket.price * basket.count)}
                  <ProductHCard key={basket.code} {...basket} showType='col-basket' />
                </>
              </span>
            ))
          }
        </div>
        <div className="fixed bottom-0 py-3 w-80" style={{ backgroundColor: theme.palette.secondColor.main }}>
          <div className="flex flex-col justify-center mx-3">
            <Typography variant="h5">جمع: {sum} {<Toman color='textColor' />}</Typography>
            <Button variant='contained' onClick={openBasket} sx={{ mt: 1, minWidth: 8 }}>مشاهده سبد خرید</Button>
            <Button variant='contained' onClick={openCheckout} sx={{ mt: 1, minWidth: 8 }}>تسویه حساب</Button>
          </div>
        </div>
      </div>
    </>
  )
}