import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FavoriteType } from "../../Utils/Types";

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
  }
})

export default slice.reducer;

export const {addToFavorite, removeFavorite} = slice.actions;