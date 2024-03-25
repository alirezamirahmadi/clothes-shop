import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { FavoriteType } from "../../Utils/Types";
import apiRequests from "../../Services/AxiosConfig";

const getFavorite = createAsyncThunk(
  'favorites/getFavorite',
  async (customerId: string) => {
    const result = await apiRequests.get(`FavoriteData?customerId=${customerId}`);
    return result.data;
  }
)

const postFavorite = createAsyncThunk(
  'favorites/postFavorite',
  async (body: any) => {
    await apiRequests.post('FavoriteData', body);
  }
)

const deleteFavorite = createAsyncThunk(
  'favorites/deleteFavorite',
  async (id: string) => {
    await apiRequests.delete(`FavoriteData/${id}`);
  }
)

const slice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    addToFavorite: (basket: FavoriteType[], action: PayloadAction<FavoriteType>) => {
      basket.push(action.payload);
    },
    removeFavorite: (basket: FavoriteType[], action: PayloadAction<FavoriteType>) => {
      let index = basket.findIndex(product => product.id === action.payload.id)
      basket.splice(index, 1);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getFavorite.fulfilled, (state, action) => action.payload),
      builder.addCase(postFavorite.fulfilled, (state, action) => action.payload),
      builder.addCase(deleteFavorite.fulfilled, (state, action) => action.payload)
  }
})

export default slice.reducer;

export const { addToFavorite, removeFavorite } = slice.actions;

export {
  getFavorite,
  postFavorite,
  deleteFavorite
}