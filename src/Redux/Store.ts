import { configureStore } from '@reduxjs/toolkit'

import productReducer from './Reducer/ProductReducer';
import articleReducer from './Reducer/ArticleReducer';
import BasketReducer from './Reducer/BasketReducer';
import FavoriteReducer from './Reducer/FavoriteReducer';
import LoginReucer from './Reducer/LoginReucer';
import OrderReducer from './Reducer/OrderReducer';

const store = configureStore({
  reducer: {
    products: productReducer,
    articles: articleReducer,
    basket: BasketReducer,
    favorite:FavoriteReducer,
    login:LoginReucer,
    orders:OrderReducer,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch