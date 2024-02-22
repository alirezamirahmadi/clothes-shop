import { configureStore } from '@reduxjs/toolkit'

import productReducer from './Reducer/ProductReducer';
import articleReducer from './Reducer/ArticleReducer';
import BasketReducer from './Reducer/BasketReducer';
import FavoriteReducer from './Reducer/FavoriteReducer';
import LoginReucer from './Reducer/LoginReucer';
import OrderReducer from './Reducer/OrderReducer';
import ColorReducer from './Reducer/ColorReducer';
import SizeReducer from './Reducer/SizeReducer';
import SortReducer from './Reducer/SortReducer';
import ImageReducer from './Reducer/ImageReducer';
import CategoryReducer from './Reducer/CategoryReducer';
import MenuReducer from './Reducer/MenuReducer';

const store = configureStore({
  reducer: {
    products: productReducer,
    articles: articleReducer,
    basket: BasketReducer,
    favorite: FavoriteReducer,
    login: LoginReucer,
    orders: OrderReducer,
    colors: ColorReducer,
    sizes: SizeReducer,
    sort: SortReducer,
    images:ImageReducer,
    category:CategoryReducer,
    menu:MenuReducer,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch