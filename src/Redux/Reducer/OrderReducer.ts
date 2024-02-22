import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { OrderType } from "../../Utils/Types";
import apiRequests from "../../Services/AxiosConfig";

const getOrdersFromServer = createAsyncThunk(
  'orders/getOrdersFromserver',
  async () => {
    const result = await apiRequests.get('OrderData');
    return result.data;
  }
)

const slice = createSlice({
  name:'orders',
  initialState:[],
  reducers:{
    addToOrders:(basket:OrderType[], action:PayloadAction<OrderType>) => {
      basket.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrdersFromServer.fulfilled, (state, action) => action.payload)
  }
})

export default slice.reducer;

export const {addToOrders} = slice.actions;

export {
  getOrdersFromServer
}