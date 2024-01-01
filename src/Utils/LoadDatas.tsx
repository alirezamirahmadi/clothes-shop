import {useEffect} from 'react'
import { useDispatch } from "react-redux";
import type { AppDispatch } from '../Redux/Store'

import { ProductData, BasketData, FavoriteDataa, ArticleData } from './Datas'
import { addProduct } from '../Redux/Reducer/ProductReducer';
import { addArtricle } from '../Redux/Reducer/ArticleReducer';
import { addToBasket } from '../Redux/Reducer/BasketReducer';
import { addToFavorite } from '../Redux/Reducer/FavoriteReducer';

import { Article } from '@mui/icons-material';
import Basket from '../Pages/Purchase/Basket';

export default function LoadDatas () {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    ProductData.map(product => dispatch(addProduct(product)));
    ArticleData.map(article => dispatch(addArtricle(article)));
    BasketData.map(product => dispatch(addToBasket(product)));
    FavoriteDataa.map(product => dispatch(addToFavorite(product)));
  }, [])
  return(
    <>

    </>
  )
}