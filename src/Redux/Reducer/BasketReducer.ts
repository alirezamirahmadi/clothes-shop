import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BasketType } from "../../Utils/Types";

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
    }
  }
})

export default slice.reducer;

export const {addToBasket, removeBasket, updateBasket} = slice.actions;