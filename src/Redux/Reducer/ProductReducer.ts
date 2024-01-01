import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { ProductData } from "../../Utils/Datas";
import { ProductType } from "../../Utils/Types";


// const getProductFromServer = (): ProductType[] => Products
// const getProductFromServer = createAsyncThunk(
//   'products/getProductFromserver',
//   async () => {
//     // return fetch(`${apiAddress}courses`)
//     //   .then(response => response.json())
//     //   .then(result => result)
//   }
// )

const getCategoryProductFromServer = (): ProductType[] => ProductData
// const getCategoryProductFromServer = createAsyncThunk(
//   'products/getCategoryProductFromserver',
//   async (categoryName) => {
//     // return fetch(`${apiAddress}courses/category/${categoryName}`)
//     // .then(response => response.json())
//     // .then(result => result)
//   }
// )

const getLatestProductFromServer = (): ProductType[] => ProductData
// const getLatestProductFromServer = createAsyncThunk(
//   'products/getLatestProductFromserver',
//   async () => {
//     // return fetch(`${apiAddress}courses`)
//     //   .then(response => response.json())
//     //   .then(result => [...result].splice(0, 6))
//   }
// )

const getPopularProductFromServer = (): ProductType[] => ProductData
// const getPopularProductFromServer = createAsyncThunk(
//   'products/getPopularProducteFromserver',
//   async () => {
//     // return fetch(`${apiAddress}courses/popular`)
//     //   .then(response => response.json())
//     //   .then(result => [...result].splice(0, 6))
//   }
// )

const getSalesProductFromServer = (): ProductType[] => ProductData
// const getSalesProductFromServer = createAsyncThunk(
//   'products/getSalesProductFromserver',
//   async () => {
//     // fetch(`${apiAddress}courses/presell`)
//     //   .then(response => response.json())
//     //   .then(result => [...result].splice(0, 6))
//   }
// )

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
    // addProduct: (products, action) => {
    //   products.push(action.payload);
    // }
  },
  extraReducers: (builder) => {
    // builder.addCase(getProductFromServer.fulfilled, (state, action) => action.payload)
    // builder.addCase(getLatestProductFromServer.fulfilled, (state, action) => action.payload)
    // builder.addCase(getPopularProductFromServer.fulfilled, (state, action) => action.payload)
    // builder.addCase(getSalesProductFromServer.fulfilled, (state, action) => action.payload)
    // builder.addCase(getCategoryProductFromServer.fulfilled, (state, action) => action.payload)
  }
})


export default slice.reducer
export const {getProductFromServer, addProduct} = slice.actions
export {
  // getProductFromServer,
  getLatestProductFromServer,
  getPopularProductFromServer,
  getSalesProductFromServer,
  getCategoryProductFromServer,
}



