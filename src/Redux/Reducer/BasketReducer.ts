import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { BasketType } from "../../Utils/Types";
import apiRequests from "../../Services/AxiosConfig";

const getBasketFromServer = createAsyncThunk(
  'basket/getBasketFromserver',
  async () => {
    const result = await apiRequests.get('BasketData');
    return result.data;
  }
)

const slice = createSlice({
  name:'basket',
  initialState:[],
  reducers:{
    addToBasket:(basket:BasketType[], action:PayloadAction<BasketType>) => {
      basket.push(action.payload);
    },
    updateBasket :(basket:BasketType[], action:PayloadAction<BasketType>) => {
      let index = basket.findIndex(product => product.id === action.payload.id)
      basket[index].count = action.payload.count;
    },
    removeBasket:(basket:BasketType[], action:PayloadAction<BasketType>) => {
      let index = basket.findIndex(product => product.id === action.payload.id)
      basket.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBasketFromServer.fulfilled, (state, action) => action.payload)
  }
})

export default slice.reducer;

export const {addToBasket, removeBasket, updateBasket} = slice.actions;

export {
  getBasketFromServer
}