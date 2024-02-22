import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { ImageType } from "../../Utils/Types";
import apiRequests from "../../Services/AxiosConfig";

const getImagesFromServer = createAsyncThunk(
  'images/getImagesFromserver',
  async () => {
    const result = await apiRequests.get('ImageData');
    return result.data;
  }
)

const slice = createSlice({
  name:'image',
  initialState:[],
  reducers:{
    addToImage:(basket:ImageType[], action:PayloadAction<ImageType>) => {
      basket.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getImagesFromServer.fulfilled, (state, action) => action.payload)
  }
})

export default slice.reducer;

export const {addToImage} = slice.actions;

export {
  getImagesFromServer
}