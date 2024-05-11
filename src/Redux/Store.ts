import { configureStore } from '@reduxjs/toolkit'

import BasketReducer from './Reducer/BasketReducer';
import FavoriteReducer from './Reducer/FavoriteReducer';
import LoginReucer from './Reducer/LoginReucer';

const store = configureStore({
  reducer: {
    basket: BasketReducer,
    favorite: FavoriteReducer,
    login: LoginReucer,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch