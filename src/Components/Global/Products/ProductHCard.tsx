import React, { useEffect, useState } from 'react'
import { Typography, useTheme, Checkbox, Skeleton } from "@mui/material"
import { Link } from 'react-router-dom'
// import { FavoriteBorder, Favorite } from '@mui/icons-material'
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from '../../../Redux/Store'

import Counter from '../Counter/Counter'
// import Button from '../Button/Button'
// import SelectOption from "./SelectOption";
import Toman from '../Utility/Toman'
import Off from '../Utility/Off'
import { FavoriteType, ProductCardProp, ProductType } from '../../../Utils/Types'
// import { addToFavorite, removeFavorite } from "../../../Redux/Reducer/FavoriteReducer";
// import { addToBasket, removeBasket, updateBasket } from "../../../Redux/Reducer/BasketReducer";
import { useMutationBasket } from '../../../Hooks/BasketHook';
// import { useFavorite, useMutationFavorite } from '../../../Hooks/FavoriteHook';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';

export default function ProductHCard({ product, favoriteList }: { product: ProductCardProp, favoriteList: FavoriteType[] }): React.JSX.Element {
  const { id, image, title, code, price, off, count: countInBasket, size, color, showType } = product;
  const theme = useTheme();
  const loginInfo = useSelector((state: RootState) => state.login);
  const { mutate: updateBasket } = useMutationBasket('PUT', id?.toString());
  const { mutate: removeBasket } = useMutationBasket('DELETE', id?.toString());
  // const { data: favoriteList } = useFavorite(loginInfo ? loginInfo?.userInfo?.id : '-1');
  // const { mutate: addFavorite } = useMutationFavorite('POST');
  // const { mutate: removeFavorite, data: favoriteData } = useMutationFavorite('DELETE');
  const [count, setCount] = useState(countInBasket);
  const [options, setOptions] = useState({ size: size ? size.title : '', color: color ? color.title : '' });
  const [favoriteId, setFavoriteId] = useState<string>();
  const [showFavorite, setShowFavorite] = useState(true);
  // const [showSelectOption, setShowSelectOption] = useState(true);
  const [showAddToCard, setShowAddToCard] = useState(true);
  const [inBasket, setInBasket] = useState(false);
  const [isImageLoad, setIsImageLoad] = useState(false);
  // const basketList = useSelector((state: RootState) => state.basket);
  // const favoriteList = useSelector((state: RootState) => state.favorite);
  // const dispatch: AppDispatch = useDispatch();

  const getValue = (value: number) => {
    value === 0 ? removeBasket({})
      : updateBasket({ id, customerId: loginInfo.userInfo?.id, image, title, code, size, color, price, off, count: value })
    setCount(value);
    // value === 0 ? dispatch(removeBasket({ id, image, title, code, size: options.size, color: options.color, price, off, count: 1 }))
    //   : dispatch(updateBasket({ id, image, title, code, size: options.size, color: options.color, price, off, count: value }))
  }
  // const handleBasket = () => {
  //   setCount(1);
  //   addBasket({ id, image, title, code, size: options.size, color: options.color, price, off, count: 1 });
  //   // dispatch(addToBasket({ id, image, title, code, size: options.size, color: options.color, price, off, count: 1 }))
  // }
  // const handleFavorite = () => {
  //   // setFavorite(!favorite);
  //   if (loginInfo?.userInfo?.id) {
  //     favoriteId ? removeFavorite({ id: favoriteId }) : addFavorite({ customerId: loginInfo?.userInfo?.id, product: { id, title, image, code, price, off } });
  //     setFavoriteId(favoriteId ? undefined : favoriteData?.data.id);
  //   }
  // }
  // const handleOptions = (size: string, color: string) => {
  //   setOptions({ size, color });
  // }
  const loadImageHandler = () => {
    setIsImageLoad(true);
  }

  useEffect(() => {
    // let basketCount = basketList.find((product: BasketType) => product.id == id);
    // if (basketCount) {
    //   setCount(basketCount.count);
    //   setOptions({ size: basketCount.size, color: basketCount.color });
    // }
    setOptions({ size: size ? size.title : '', color: color ? color.title : '' });

    let favoritePro = favoriteList?.find((favorite: FavoriteType) => favorite.product.id == id);
    favoritePro != undefined && setFavoriteId(favoritePro.id);

    if (showType === 'row-basket' || showType === 'col-basket') {
      setShowFavorite(false);
      // setShowSelectOption(false);
      setInBasket(true);
    }
    if (showType === ('col-search')) {
      // setShowSelectOption(false);
      setInBasket(false);
      setShowAddToCard(false);
    }
  }, [favoriteList])
  // }, [basketList, favoriteList])

  // useEffect(() => {
  //   setFavoriteId(favoriteData?.data.id);
  // }, [favoriteData])
  useEffect(() => {
    let favoritePro = favoriteList?.find((favorite: FavoriteType) => favorite.product.id == id);
    favoritePro != undefined && setFavoriteId(favoritePro.id);
  }, [])

  return (
    <>
      <div dir='rtl' className="flex border-2 rounded-md mx-1 mb-1" style={{ backgroundColor: theme.palette.secondColor.main }}>
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
            {/* {showFavorite && <Checkbox checked={!favorite ? false : true} onChange={handleFavorite} sx={{ height: 20 }} icon={<FavoriteBorder color="primary" />} checkedIcon={<Favorite color="primary" />} />} */}
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
            {/* {showSelectOption && <SelectOption clothesSize={size} clothesColor={color} handleOptions={handleOptions} />} */}
          </div>
          {/* {showAddToCard && count === 0 && <Button variant="contained" color='primary' sx={{ mx: 'auto', display: 'block', mb: 1 }} onClick={() => handleBasket()}>افزودن به سبد</Button>} */}
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
            {!inBasket && off && <Typography variant="body2" color={theme.palette.primary.contrastText} sx={{ bgcolor: theme.palette.mainColor.main, mt: 0.2, paddingX: 1, borderRadius: 100 }} >{off}%</Typography>}
          </div>
        </div>
      </div>
    </>
  )
}