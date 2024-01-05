import React, { useEffect, useState } from 'react'
import { Typography, useTheme, Checkbox } from "@mui/material"
import { Link } from 'react-router-dom'
import { FavoriteBorder, Favorite } from '@mui/icons-material'
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from '../../../Redux/Store'

import Counter from '../Counter/Counter'
import Button from '../Button/Button'
import SelectOption from "./SelectOption";
import Toman from '../Utility/Toman'
import Off from '../Utility/Off'
import { BasketType, FavoriteType, ProductCardProp } from '../../../Utils/Types'
import { addToFavorite, removeFavorite } from "../../../Redux/Reducer/FavoriteReducer";
import { addToBasket, removeBasket, updateBasket } from "../../../Redux/Reducer/BasketReducer";

export default function ProductHCard({ id, image, title, code, size, color, price, off, showType }: ProductCardProp): React.JSX.Element {
  const theme = useTheme();
  const [count, setCount] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [showFavorite, setShowFavorite] = useState(true);
  const [showSelectOption, setShowSelectOption] = useState(true);
  const [showAddToCard, setShowAddToCard] = useState(true);
  const [inBasket, setInBasket] = useState(false);
  const basketList = useSelector((state:RootState) => state.basket);
  const favoriteList = useSelector((state:RootState) => state.favorite);
  const dispatch: AppDispatch = useDispatch();

  const getValue = (value: number) => {
    setCount(value);
    value === 0 ? dispatch(removeBasket({ id, image, title, code, size, color, price, off, count: 1 }))
    : dispatch(updateBasket({ id, image, title, code, size, color, price, off, count: value }))
  }
  const handleBasket = () => {
    setCount(1);
    dispatch(addToBasket({ id, image, title, code, size, color, price, off, count: 1 }))
  }
  const handleFavorite = () => {
    setFavorite(!favorite);
    favorite ? dispatch(removeFavorite({id, code, title, price})) : dispatch(addToFavorite({id, code, title, price}));    
  }

  useEffect(() => {
    let basketCount = basketList.find((product:BasketType) => product.id == id);
    basketCount && setCount(basketCount.count)

    let isFavorite = favoriteList.find((product:FavoriteType) => product.id == id);
    isFavorite != undefined && setFavorite(true)

    if (showType === 'row-basket' || showType === 'col-basket') {
      setShowFavorite(false);
      setShowSelectOption(false);
      setInBasket(true);
    }
    if (showType === ('col-search')) {
      setShowSelectOption(false);
      setInBasket(false);
    }
  }, [basketList, favoriteList])

  return (
    <>
      <div dir='rtl' className="flex border-2 rounded-md mx-1 mb-1" style={{backgroundColor:theme.palette.secondColor.main}}>
        <Link to={`/product-info/${id}`}>
          <div className="w-20 my-auto me-1">
            <img loading="lazy" width="100%" height="100%" src={image} />
          </div>
        </Link>
        <div dir='rtl' className={(showType === 'row' || showType === 'row-basket') ? 'flex justify-between w-full px-4 my-auto' : ''}>
          <Link to={`/product-info/${id}`}>
            <div className="h-7 overflow-hidden">
              <Typography variant='textlg' component='div' color={theme.palette.textColor.main}>{title}</Typography>
            </div>
          </Link>
          <div className="flex justify-between">
            <Typography variant="textbase" component='p' color={theme.palette.textColor.main}>کد: {code}</Typography>
            {showFavorite && <Checkbox checked={favorite} onChange={handleFavorite} sx={{ height: 20 }} icon={<FavoriteBorder color="mainColor" />} checkedIcon={<Favorite color="mainColor" />} />}
          </div>
          <div className="flex justify-center my-1">
            {showSelectOption && <SelectOption clothesSize={size} clothesColor={color} />}
          </div>
          {showAddToCard && count === 0 && <Button text='افزودن به سبد' size='small' className=' rounded-md px-3 pt-1 mt-2 mx-auto' clickHandler={() => handleBasket(code)} />}
          {showAddToCard && count > 0 && <Counter value={count} className="mx-auto mt-2" getValue={getValue} />}
          <div className="flex flex-row-reverse justify-between">
            {!inBasket ?
              <>
                {off ?
                  <div className="flex justify-between">
                    <Typography variant="textsm" sx={{ textDecorationLine: 'line-through', marginRight: 2 }} color={theme.palette.textColor.main}>{price.toLocaleString()}</Typography>
                    <Typography variant="textbase" color={theme.palette.textColor.main}>{Math.ceil(price - (price * off / 100)).toLocaleString()}{<Toman color='textColor' />}</Typography>
                  </div>
                  : <Typography variant="textbase" color={theme.palette.textColor.main}>{price.toLocaleString()}{<Toman color='textColor' />}</Typography>
                }
              </>
              : <>
                {off ?
                  <div className="flex justify-between">
                    <Typography variant="textsm" sx={{ marginRight: 2 }} color={theme.palette.mainColor.main}>{Math.ceil((price * off / 100) * count).toLocaleString()}{<Off color='mainColor' />}</Typography>
                    <Typography variant="textbase" color={theme.palette.textColor.main}>{Math.ceil((price - (price * off / 100)) * count).toLocaleString()}{<Toman color='textColor' />}</Typography>
                  </div>
                  : <Typography variant="textbase" color={theme.palette.textColor.main}>{(price * count).toLocaleString()}{<Toman color='textColor' />}</Typography>
                }
              </>
            }
            {!inBasket && off && <Typography variant="textbase" sx={{ bgcolor: theme.palette.mainColor.main, paddingX: 1, borderRadius: 100 }} color={theme.palette.textColor.main}>{off}%</Typography>}
          </div>
        </div>
      </div>
    </>
  )
}