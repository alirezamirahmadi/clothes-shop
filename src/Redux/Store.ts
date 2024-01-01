import { configureStore } from '@reduxjs/toolkit'

import productReducer from './Reducer/ProductReducer';
import articleReducer from './Reducer/ArticleReducer';
import BasketReducer from './Reducer/BasketReducer';
import FavoriteReducer from './Reducer/FavoriteReducer';

const store = configureStore({
  reducer: {
    products: productReducer,
    articles: articleReducer,
    basket: BasketReducer,
    favorite:FavoriteReducer,
  }
})

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// export type AppDispatch = typeof useDispatch