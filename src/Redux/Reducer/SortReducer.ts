import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { SortType } from "../../Utils/Types";
import apiRequests from "../../Services/AxiosConfig";

const getSortFromServer = createAsyncThunk(
  'sort/getSortFromserver',
  async () => {
    const result = await apiRequests.get('SortData');
    return result.data;
  }
)

const slice = createSlice({
  name:'orders',
  initialState:[],
  reducers:{
    addToSort:(basket:SortType[], action:PayloadAction<SortType>) => {
      basket.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSortFromServer.fulfilled, (state, action) => action.payload)
  }
})

export default slice.reducer;

export const {addToSort} = slice.actions;

export {
  getSortFromServer
}