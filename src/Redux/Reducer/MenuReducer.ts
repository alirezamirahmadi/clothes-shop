import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// import { MenuType } from "../../Utils/Types";
import apiRequests from "../../Services/AxiosConfig";

const getMenuFromServer = createAsyncThunk(
  'menu/getMenuFromserver',
  async () => {
    const result = await apiRequests.get('MenuData');
    return result.data;
  }
)

const slice = createSlice({
  name:'menu',
  initialState:[],
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(getMenuFromServer.fulfilled, (state, action) => action.payload)
  }
})

export default slice.reducer;

export {
  getMenuFromServer
}