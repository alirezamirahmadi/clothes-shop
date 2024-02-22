import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { ClothesSizeType } from "../../Utils/Types";
import apiRequests from "../../Services/AxiosConfig";

const getSizesFromServer = createAsyncThunk(
  'sizes/getSizesFromserver',
  async () => {
    const result = await apiRequests.get('SizeData');
    return result.data;
  }
)

const slice = createSlice({
  name:'orders',
  initialState:[],
  reducers:{
    addToSizes:(basket:ClothesSizeType[], action:PayloadAction<ClothesSizeType>) => {
      basket.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSizesFromServer.fulfilled, (state, action) => action.payload)
  }
})

export default slice.reducer;

export const {addToSizes} = slice.actions;

export {
  getSizesFromServer
}