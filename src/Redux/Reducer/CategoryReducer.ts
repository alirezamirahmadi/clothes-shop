import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// import { CategoryType } from "../../Utils/Types";
import apiRequests from "../../Services/AxiosConfig";

const getCategoryFromServer = createAsyncThunk(
  'category/getCategoryFromserver',
  async () => {
    const result = await apiRequests.get('CategoryData');
    return result.data;
  }
)

const slice = createSlice({
  name:'image',
  initialState:[],
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(getCategoryFromServer.fulfilled, (state, action) => action.payload)
  }
})

export default slice.reducer;

export {
  getCategoryFromServer
}