import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Typography, useTheme, Checkbox } from "@mui/material";
import { FavoriteBorder, Favorite } from '@mui/icons-material'
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from '../../../Redux/Store'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

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
      <div dir="rtl" className="border rounded-md overflow-hidden w-fit h-max md:py-1 md:px-1 lg:px-3 sm:mb-7">
        <div className="block">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {images.map(image => (
            <SwiperSlide>
            1
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
        {/* {!isImageLoad && <ShimmerThumbnail height={180} />} */}
        {/* <img className='w-40 h-48 sm:w-48 sm:h-56 lg:w-52 lg:h-64 block mx-auto' src={image} alt="" onLoad={loadImageHandler} /> */}
        <Link to={`/product-info/${id}`}>
          <div className="h-7 overflow-hidden">
            <Typography variant="textbase" component='p' color={theme.palette.textColor.main}>{title}</Typography>
          </div>
        </Link>
        <div className="flex justify-between">
          <Typography variant="textbase" component='p' color={theme.palette.textColor.main}>کد: {code}</Typography>
          <Checkbox checked={favorite} onChange={handleFavorite} sx={{ height: 20 }} icon={<FavoriteBorder color="mainColor" />} checkedIcon={<Favorite color="mainColor" />} />
        </div>
        <div className="lg:flex lg:justify-center my-1 hidden">
          <SelectOption clothesSize={size} clothesColor={color} />
        </div>
        <div className="flex flex-row-reverse justify-between">
          {off ?
            <div className="flex">
              <Typography variant="textsm" sx={{ textDecorationLine: 'line-through', marginRight: 2 }} color={theme.palette.textColor.main}>{price.toLocaleString()}</Typography>
              <Typography variant="textbase" color={theme.palette.textColor.main}>{Math.ceil(price - (price * off / 100)).toLocaleString()}{<Toman color='textColor' />}</Typography>
            </div>
            : <Typography variant="textbase" color={theme.palette.textColor.main}>{price.toLocaleString()}{<Toman color='textColor' />}</Typography>
          }
          {off && <Typography variant="textbase" sx={{ bgcolor: theme.palette.mainColor.main, paddingX: 1, borderRadius: 100 }} color={theme.palette.textColor.main}>{off}%</Typography>}
        </div>
        <div className="hidden lg:block">
          {count === 0 && <Button text='افزودن به سبد' size='small' className=' rounded-md px-3 pt-1 mt-2 mx-auto' clickHandler={handleBasket} />}
          {count > 0 && <Counter value={count} className="mx-auto mt-2" getValue={getValue} />}
        </div>
      </div>
    </>
  )
}