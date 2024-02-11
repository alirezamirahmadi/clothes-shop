import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Typography, useTheme, Checkbox } from "@mui/material";
import { FavoriteBorder, Favorite } from '@mui/icons-material'
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from '../../../Redux/Store'

import { BasketType, FavoriteType, ProductCardProp } from "../../../Utils/Types";
import { addToFavorite, removeFavorite } from "../../../Redux/Reducer/FavoriteReducer";
import { addToBasket, removeBasket, updateBasket } from "../../../Redux/Reducer/BasketReducer";
import { ImageData } from "../../../Utils/Datas";
import SelectOption from "./SelectOption";
import Counter from "../Counter/Counter";
import Button from "../Button/Button";
import Toman from "../Utility/Toman";

export default function ProductVCard({ id, image, title, code, size, color, price, off }: ProductCardProp): React.JSX.Element {
  const [isImageLoad, setIsImageLoad] = useState(false);
  const [count, setCount] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [images, setImages] = useState([]);
  const theme = useTheme();
  const basketList = useSelector((state: RootState) => state.basket);
  const favoriteList = useSelector((state: RootState) => state.favorite);
  const dispatch: AppDispatch = useDispatch();

  const loadImageHandler = () => {
    setIsImageLoad(true);
  }
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
    favorite ? dispatch(removeFavorite({ id, code, title, price })) : dispatch(addToFavorite({ id, code, title, price }));
  }
  const getIamges = () => {
    let images1 = ImageData.filter(image => image.idProduct === id)
    let tempArray: { original: string, thumbnail: string }[] = [];
    images1?.map(image => {
      tempArray?.push({ original: image.image, thumbnail: image.image })
    })
    tempArray && setImages(tempArray);
  }
  const handleOptions = (size: string, color: string) => {

  }

  useEffect(() => {
    let basketCount = basketList.find((product: BasketType) => product.code == code);
    basketCount && setCount(basketCount.count)

    let isFavorite = favoriteList.find((product: FavoriteType) => product.code == code);
    isFavorite != undefined && setFavorite(true)
    console.log();

  }, [basketList, favoriteList])

  useEffect(() => {
    getIamges();
  }, [])

  return (
    <>
      <div dir="rtl" className="overflow-hidden w-fit h-max shadow rounded-xl md:py-1 sm:mb-7">
        <Link to={`/product-info/${id}`}>
          <img className='w-full h-48 sm:h-56 lg:h-64 block mx-auto rounded-t-xl' src={image} alt="" onLoad={loadImageHandler} />
          <div className="h-7 overflow-hidden md:px-1 lg:px-3">
            <Typography variant="body1" component='p' >{title}</Typography>
          </div>
        </Link>
        <div className="md:px-1 lg:px-3">
          <div className="flex justify-between">
            <Typography variant="body1" component='p' >کد: {code}</Typography>
            <Checkbox checked={favorite} onChange={handleFavorite} sx={{ height: 20 }} icon={<FavoriteBorder color="mainColor" />} checkedIcon={<Favorite color="mainColor" />} />
          </div>
          <div className="lg:flex lg:justify-center my-1 hidden">
            <SelectOption clothesSize={size} clothesColor={color} handleOptions={handleOptions} />
          </div>
          <div className="flex flex-row-reverse justify-between">
            {off ?
              <div className="flex">
                <Typography variant="body2" sx={{ textDecorationLine: 'line-through', marginRight: 2 }} >{price.toLocaleString()}</Typography>
                <Typography variant="body1" >{Math.ceil(price - (price * off / 100)).toLocaleString()}{<Toman color='textColor' />}</Typography>
              </div>
              : <Typography variant="body1" >{price.toLocaleString()}{<Toman color='textColor' />}</Typography>
            }
            {off && <Typography variant="body1" sx={{ bgcolor: theme.palette.mainColor.main, paddingX: 1, borderRadius: 100 }} >{off}%</Typography>}
          </div>
          <div className="hidden lg:block">
            {count === 0 && <Button text='افزودن به سبد' size='small' className=' rounded-md px-3 pt-1 mt-2 mx-auto' clickHandler={handleBasket} />}
            {count > 0 && <Counter value={count} className="mx-auto mt-2" getValue={getValue} />}
          </div>
        </div>
      </div>
    </>
  )
}