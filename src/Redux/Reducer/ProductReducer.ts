import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ProductData } from "../../Utils/Datas";
import { ProductType } from "../../Utils/Types";

const getCategoryProductFromServer = (): ProductType[] => ProductData

const getLatestProductFromServer = (): ProductType[] => ProductData

const getPopularProductFromServer = (): ProductType[] => ProductData

const getSalesProductFromServer = (): ProductType[] => ProductData

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
})


export default slice.reducer
export const {getProductFromServer, addProduct} = slice.actions
export {
  getLatestProductFromServer,
  getPopularProductFromServer,
  getSalesProductFromServer,
  getCategoryProductFromServer,
}



