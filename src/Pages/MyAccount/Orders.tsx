import { Typography, useTheme } from "@mui/material"
import { useSelector } from "react-redux";
import type { RootState } from '../../Redux/Store';

import BorderOne from "../../Components/Global/Border/BorderOne"
import { OrderType } from "../../Utils/Types";
import Toman from "../../Components/Global/Utility/Toman";

export default function Orders(): React.JSX.Element {
  const theme = useTheme();
  const orders = useSelector((state: RootState) => state.orders);

  return (
    <>
      <BorderOne title="سفارش ها" className="lg:w-3/5">
        {
          orders.map((order: OrderType) => (
            <div key={order.id} className="flex flex-col border-b p-1  lg:p-2 lg:border lg:rounded-md lg:mb-2 lg:mx-24">
              <Typography variant="body1" color={theme.palette.mainColor.main}>{order.status}</Typography>
              <div className="flex justify-between my-2">
                <Typography variant="body2">کد سفارش: {order.orderCode}</Typography>
                <Typography variant="body2" >{order.orderDate}</Typography>
              </div>
              <div className="flex justify-between my-2">
                <Typography variant="body2">مبلغ: {order.price}{<Toman color='textColor' />}</Typography>
                {order.off && <Typography variant="body2" color={theme.palette.mainColor.main}>تخفیف: {order.off}{<Toman color='mainColor' />}</Typography>}
              </div>
            </div>
          ))
        }
      </BorderOne>
    </>
  )
}