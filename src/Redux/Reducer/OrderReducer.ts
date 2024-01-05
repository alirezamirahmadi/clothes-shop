import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { OrderType } from "../../Utils/Types";

const slice = createSlice({
  name:'orders',
  initialState:[],
  reducers:{
    addToOrders:(basket:OrderType[], action:PayloadAction<OrderType>) => {
      basket.push(action.payload);
    },
  }
})

export default slice.reducer;

export const {addToOrders} = slice.actions;