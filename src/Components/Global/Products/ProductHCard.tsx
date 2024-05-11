import React, { useEffect, useState } from 'react'
import { Typography, useTheme, Skeleton } from "@mui/material"
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from '../../../Redux/Store'

import Counter from '../Counter/Counter'
import Toman from '../Utility/Toman'
import Off from '../Utility/Off'
import { FavoriteType, ProductCardProp } from '../../../Utils/Types'
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import { putBasket, deleteBasket, getBasket } from '../../../Redux/Reducer/BasketReducer';

export default function ProductHCard({ product, favoriteList }: { product: ProductCardProp, favoriteList: FavoriteType[] }): React.JSX.Element {
  
  const { id, image, title, code, price, off, count: countInBasket, size, color, showType } = product;
  const theme = useTheme();
  const loginInfo = useSelector((state: RootState) => state.login);
  const [count, setCount] = useState(countInBasket);
  const [options, setOptions] = useState({ size: size ? size.title : '', color: color ? color.title : '' });
  const [favoriteId, setFavoriteId] = useState<string>();
  const [showFavorite, setShowFavorite] = useState(true);
  const [showAddToCard, setShowAddToCard] = useState(true);
  const [inBasket, setInBasket] = useState(false);
  const [isImageLoad, setIsImageLoad] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const getValue = (value: number) => {
    value === 0 ? dispatch(deleteBasket(id)).then(() => { dispatch(getBasket(loginInfo.userInfo?.id ?? '0')) })
      : dispatch(putBasket({ id, customerId: loginInfo.userInfo?.id, image, title, code, size, color, price, off, count: value }));
    setCount(value);
  }

  const loadImageHandler = () => {
    setIsImageLoad(true);
  }

  useEffect(() => {
    setOptions({ size: size ? size.title : '', color: color ? color.title : '' });

    let favoritePro = favoriteList?.find((favorite: FavoriteType) => favorite.product.id == id);
    favoritePro != undefined && setFavoriteId(favoritePro.id);

    if (showType === 'row-basket' || showType === 'col-basket') {
      setShowFavorite(false);
      setInBasket(true);
    }
    if (showType === ('col-search')) {
      setInBasket(false);
      setShowAddToCard(false);
    }
  }, [favoriteList])

  useEffect(() => {
    let favoritePro = favoriteList?.find((favorite: FavoriteType) => favorite.product.id == id);
    favoritePro != undefined && setFavoriteId(favoritePro.id);
  }, [])

  return (
    <>
      <div dir='rtl' className="flex border-2 rounded-md mx-1 mb-1">
        <Link to={`/product-info/${id}`}>
          <div className="w-20 my-auto me-1">
            <img style={{ display: isImageLoad ? 'block' : 'none' }} width="100%" height="100%" src={image} onLoad={loadImageHandler} />
            {!isImageLoad && <Skeleton variant="rounded" animation='wave' width='100%' height='100%' />}
          </div>
        </Link>
        <div dir='rtl' className={(showType === 'row' || showType === 'row-basket') ? 'flex justify-between w-full px-4 my-auto' : ''}>
          <Link to={`/product-info/${id}`}>
            <div className="h-7 overflow-hidden">
              <Typography variant='body1' >{title}</Typography>
            </div>
          </Link>
          <div className="flex justify-between">
            <Typography variant="body1" component='p' >کد: {code}</Typography>
            {showFavorite && <FavoriteIcon favoriteId={favoriteId} product={product} />}
            {
              showType?.includes('basket') &&
              <>
                <Typography variant='body2' sx={{ marginLeft: 1 }} >{options.color}</Typography>
                <Typography variant='body2' sx={{ marginLeft: 1 }} >سایز: {options.size}</Typography>
              </>
            }
          </div>
          <div className="flex justify-center my-1">
          </div>
          {showAddToCard && count && count > 0 && <Counter value={count} className="mx-auto mt-2" getValue={getValue} />}
          <div className="flex flex-row-reverse justify-between">
            {!inBasket ?
              <>
                {off ?
                  <div className="flex justify-between">
                    <Typography variant="body2" sx={{ textDecorationLine: 'line-through', marginRight: 2 }} >{price.toLocaleString()}</Typography>
                    <Typography variant="body1" >{Math.ceil(price - (price * off / 100)).toLocaleString()}{<Toman color='inherit' />}</Typography>
                  </div>
                  : <Typography variant="body1" >{price?.toLocaleString()}{<Toman color='inherit' />}</Typography>
                }
              </>
              : <>
                {off && count ?
                  <div className="flex justify-between">
                    <Typography variant="body2" sx={{ marginRight: 2 }} color={theme.palette.mainColor.main}>{Math.ceil((price * off / 100) * count).toLocaleString()}{<Off color='primary' />}</Typography>
                    <Typography variant="body1" >{Math.ceil((price - (price * off / 100)) * count).toLocaleString()}{<Toman color='inherit' />}</Typography>
                  </div>
                  : <Typography variant="body1" >{count && (price * count).toLocaleString()}{<Toman color='inherit' />}</Typography>
                }
              </>
            }
            {!inBasket && off && <Typography variant="body2" color={theme.palette.primary.contrastText} sx={{ bgcolor: theme.palette.primary.main, mt: 0.2, paddingX: 1, borderRadius: 100 }} >{off}%</Typography>}
          </div>
        </div>
      </div>
    </>
  )
}