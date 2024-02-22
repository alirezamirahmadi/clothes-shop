// import {useEffect} from 'react';
// import { useDispatch } from "react-redux";
// import type { AppDispatch } from '../Redux/Store';

// import { ProductData, BasketData, FavoriteData, ArticleData, OrderData } from './Datas';
// import { addProduct } from '../Redux/Reducer/ProductReducer';
// import { addArtricle } from '../Redux/Reducer/ArticleReducer';
// import { addToBasket } from '../Redux/Reducer/BasketReducer';
// import { addToFavorite } from '../Redux/Reducer/FavoriteReducer';
// import { addToOrders } from '../Redux/Reducer/OrderReducer';

// export default function LoadDatas () {
//   const dispatch: AppDispatch = useDispatch();

//   useEffect(() => {
//     ProductData.map(product => dispatch(addProduct(product)));
//     ArticleData.map(article => dispatch(addArtricle(article)));
//     BasketData.map(product => dispatch(addToBasket(product)));
//     FavoriteData.map(product => dispatch(addToFavorite(product)));
//     OrderData.map(order => dispatch(addToOrders(order)));
//   }, [])
//   return(
//     <>

//     </>
//   )
// }