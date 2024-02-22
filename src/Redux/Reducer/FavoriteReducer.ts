import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { FavoriteType } from "../../Utils/Types";
import apiRequests from "../../Services/AxiosConfig";

const getFavoritesFromServer = createAsyncThunk(
  'favorites/getFavoritesFromserver',
  async () => {
    const result = await apiRequests.get('FavoriteData');
    return result.data;
  }
)

const slice = createSlice({
  name:'favorite',
  initialState:[],
  reducers:{
    addToFavorite:(basket:FavoriteType[], action:PayloadAction<FavoriteType>) => {
      basket.push(action.payload);
    },
    removeFavorite:(basket:FavoriteType[], action:PayloadAction<FavoriteType>) => {
      let index = basket.findIndex(product => product.id === action.payload.id)
      basket.splice(index, 1);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getFavoritesFromServer.fulfilled, (state, action) => action.payload)
  }
})

export default slice.reducer;

export const {addToFavorite, removeFavorite} = slice.actions;

export {
  getFavoritesFromServer
}