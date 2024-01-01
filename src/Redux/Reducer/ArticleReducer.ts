import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ArticleType } from "../../Utils/Types";

const slice = createSlice({
  name:'articles',
  initialState:[],
  reducers:{
    addArtricle:(articles:ArticleType[], action:PayloadAction<ArticleType>) => {
      articles.push(action.payload);
    }
  }
})

export default slice.reducer;

export const {addArtricle} = slice.actions;

