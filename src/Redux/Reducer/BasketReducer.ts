import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { BasketType } from "../../Utils/Types";
import apiRequests from "../../Services/AxiosConfig";

const getBasket = createAsyncThunk(
  'basket/getBasket',
  async (customerId: string) => {
    const result = await apiRequests.get(`BasketData?customerId=${customerId}`);
    return result.data;
  }
)

const postBasket = createAsyncThunk(
  'basket/postBasket',
  async (body: any) => {
    await apiRequests.post('BasketData', body);
  }
)

const putBasket = createAsyncThunk(
  'basket/putBasket',
  async (body: any) => {
    await apiRequests.put(`BasketData/${body.id}`, body);
  }
)

const deleteBasket = createAsyncThunk(
  'basket/deleteBasket',
  async (basketId: string) => {
    await apiRequests.delete(`BasketData/${basketId}`);
  }
)

const slice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    addToBasket: (basket: BasketType[], action: PayloadAction<BasketType[]>) => {
      basket.push(...action.payload);
    },
    updateBasket: (basket: BasketType[], action: PayloadAction<BasketType>) => {
      let index = basket.findIndex(product => product.id === action.payload.id)
      basket[index].count = action.payload.count;
    },
    removeBasket: (basket: BasketType[], action: PayloadAction<BasketType>) => {
      let index = basket.findIndex(product => product.id === action.payload.id)
      basket.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBasket.fulfilled, (state, action) => action.payload),
      builder.addCase(postBasket.fulfilled, (state, action) => action.payload),
      builder.addCase(putBasket.fulfilled, (state, action) => action.payload),
      builder.addCase(deleteBasket.fulfilled, (state, action) => action.payload)
  }
})

export default slice.reducer;

export const { addToBasket, removeBasket, updateBasket } = slice.actions;

export {
  getBasket,
  postBasket,
  putBasket,
  deleteBasket
}