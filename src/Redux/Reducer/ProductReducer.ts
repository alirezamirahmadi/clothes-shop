import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import apiRequests from '../../Services/AxiosConfig';

import { ProductType } from "../../Utils/Types";

const getProductsFromServer = createAsyncThunk(
  'products/getProductsFromserver',
  async () => {
    const result = await apiRequests.get('ProductData');
    return result.data;
  }
)

const slice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProduct: (products:ProductType[], action:PayloadAction<ProductType>) => {
      products.push(action.payload)
    },
    getProductFromServer: (Products, action) => {
      return Products;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsFromServer.fulfilled, (state, action) => action.payload)
  }
})


export default slice.reducer
export const {getProductFromServer, addProduct} = slice.actions
export {
  getProductsFromServer
}
// export {
//   getLatestProductFromServer,
//   getPopularProductFromServer,
//   getSalesProductFromServer,
//   getCategoryProductFromServer,
// }



