import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { ArticleType } from "../../Utils/Types";
import apiRequests from "../../Services/AxiosConfig";

const getArticlesFromServer = createAsyncThunk(
  'articles/getArticlesFromserver',
  async () => {
    const result = await apiRequests.get('ArticleData');
    return result.data;
  }
)

const slice = createSlice({
  name:'articles',
  initialState:[],
  reducers:{
    addArtricle:(articles:ArticleType[], action:PayloadAction<ArticleType>) => {
      articles.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getArticlesFromServer.fulfilled, (state, action) => action.payload)
  }
})

export default slice.reducer;

export const {addArtricle} = slice.actions;

export {
  getArticlesFromServer
}

