import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { ClothesColorType } from "../../Utils/Types";
import apiRequests from "../../Services/AxiosConfig";

const getColorsFromServer = createAsyncThunk(
  'colors/getColorsFromserver',
  async () => {
    const result = await apiRequests.get('ColorData');
    return (await result.data);
  }
)

const slice = createSlice({
  name:'colors',
  initialState:[],
  reducers:{
    addToColors:(basket:ClothesColorType[], action:PayloadAction<ClothesColorType>) => {
      basket.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getColorsFromServer.fulfilled, (state, action) => action.payload)
  }
})

export default slice.reducer;

export const {addToColors} = slice.actions;

export {
  getColorsFromServer
}