import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Typography, useTheme, Checkbox, Skeleton } from "@mui/material";
import { FavoriteBorder, Favorite } from '@mui/icons-material'
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import { useSelector, useDispatch } from "react-redux";
// import type { RootState, AppDispatch } from '../../../Redux/Store'

import { FavoriteType, ProductCardProp } from "../../../Utils/Types";
// import { addToFavorite, removeFavorite } from "../../../Redux/Reducer/FavoriteReducer";
// import { addToBasket, removeBasket, updateBasket } from "../../../Redux/Reducer/BasketReducer";
// import { ImageData } from "../../../Utils/Datas";
// import SelectOption from "./SelectOption";
// import Counter from "../Counter/Counter";
import Toman from "../Utility/Toman";
import { useFavorite, useMutationFavorite } from '../../../Hooks/FavoriteHook';

export default function ProductVCard({ id, image, title, code, price, off }: ProductCardProp): React.JSX.Element {
  const [isImageLoad, setIsImageLoad] = useState(false);
  // const [count, setCount] = useState(0);
  const [favorite, setFavorite] = useState(false);
  // const [images, setImages] = useState<{ original: string, thumbnail: string }[]>([]);
  const theme = useTheme();
  // const basketList = useSelector((state: RootState) => state.basket);
  // const favoriteList = useSelector((state: RootState) => state.favorite);
  // const dispatch: AppDispatch = useDispatch();
  const { data: favoriteList } = useFavorite();
  const { mutate: addFavorite } = useMutationFavorite('POST', id.toString());
  const { mutate: removeFavorite } = useMutationFavorite('DELETE', id.toString());

  const loadImageHandler = () => {
    setIsImageLoad(true);
  }
  // const getValue = (value: number) => {
  //   setCount(value);
  //   value === 0 ? dispatch(removeBasket({ id, image, title, code, size, color, price, off, count: 1 }))
  //     : dispatch(updateBasket({ id, image, title, code, size, color, price, off, count: value }))
  // }
  // const handleBasket = () => {
  //   setCount(1);
  //   dispatch(addToBasket({ id, image, title, code, size, color, price, off, count: 1 }))
  // }
  const handleFavorite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(!favorite);
    favorite ? removeFavorite({ id, code, title, price }) : addFavorite({ id, code, title, price });
    event.stopPropagation();
  }
  // const getIamges = () => {
  //   let images1 = ImageData.filter(image => image.idProduct === id)
  //   let tempArray: { original: string, thumbnail: string }[] = [];
  //   images1?.map(image => {
  //     tempArray?.push({ original: image.image, thumbnail: image.image })
  //   })
  //   tempArray && setImages(tem/pArray);
  // }
  // const handleOptions = (size: string, color: string) => {

  // }

  // useEffect(() => {
  //   let basketCount: BasketType | undefined = basketList.find((product: BasketType) => product.code === code);
  //   setCount(basketCount?.count);

  // }, [basketList])
  useEffect(() => {
    let isFavorite = favoriteList?.find((product: FavoriteType) => product.code == code);
    isFavorite != undefined && setFavorite(true)

  }, [favoriteList])

  // useEffect(() => {
  //   getIamges();
  // }, [])

  return (
    <>
      <div dir="rtl" className="overflow-hidden w-fit h-max shadow hover:shadow-lg rounded-xl md:py-1 sm:mb-7 ms-1">
        <div className="relative group/item">
          <div className="group/edit lg:opacity-0 group-hover/item:opacity-100 absolute top-3 transition-opacity duration-700 delay-75">
            <Checkbox checked={favorite} onChange={handleFavorite} sx={{ height: 20 }} icon={<FavoriteBorder color="primary" />} checkedIcon={<Favorite color="primary" />} />
          </div>
          <Link to={`/product-info/${id}`}>
            <img className='w-full h-48 sm:h-56 lg:h-64 mx-auto rounded-t-xl' style={{ display: isImageLoad ? 'block' : 'none' }} src={image} alt="" onLoad={loadImageHandler} />
            {!isImageLoad && <Skeleton variant="rounded" animation='wave' width='100%' height='15rem' />}
            <div className="h-7 overflow-hidden mt-1 md:px-1 lg:px-3">
              <Typography variant="body1" component='p' >{title}</Typography>
            </div>
          </Link>
        </div>
        <div className="md:px-1 lg:px-3">
          {/* <div className="flex justify-between">
            <Typography variant="body1" component='p' >کد: {code}</Typography>
          </div> */}
          {/* <div className="lg:flex lg:justify-center my-1 hidden">
            <IconButton title="افزودن به سبد" color="primary">
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <SelectOption clothesSize={size} clothesColor={color} handleOptions={handleOptions} />
          </div> */}
          <div className="flex flex-row-reverse justify-between">
            {off ?
              <div className="flex">
                <Typography variant="body2" sx={{ textDecorationLine: 'line-through', marginRight: 2 }} >{price.toLocaleString()}</Typography>
                <Typography variant="body1" >{Math.ceil(price - (price * off / 100)).toLocaleString()}{<Toman color='textColor' />}</Typography>
              </div>
              : <Typography variant="body1" >{price.toLocaleString()}{<Toman color='textColor' />}</Typography>
            }
            {off && <Typography variant="body2" color={theme.palette.primary.contrastText} sx={{ bgcolor: theme.palette.primary.main, pt: 0.2, paddingX: 1, borderRadius: 100 }} >{off}%</Typography>}
          </div>
          {/* <div className="hidden lg:block mt-2">
            {count === 0 && <Button variant="contained" color='primary' sx={{ mx: 'auto', display: 'block' }} onClick={handleBasket}>افزودن به سبد</Button>}
            {count > 0 && <Counter value={count} className="mx-auto" getValue={getValue} />}
          </div> */}
        </div>
      </div>
    </>
  )
}