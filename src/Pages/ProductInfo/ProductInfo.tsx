import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Typography, useTheme, Checkbox, Box, Divider, Tabs, Tab } from "@mui/material";
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import { useSelector } from "react-redux";
import type { RootState } from '../../Redux/Store'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

import IconText from "../../Components/Global/IconText/IconText";
import SelectOption from "../../Components/Global/Products/SelectOption";
import Toman from "../../Components/Global/Utility/Toman";
import Counter from "../../Components/Global/Counter/Counter";
import Button from "../../Components/Global/Button/Button";
import { ImageData } from "../../Utils/Datas";
import { BasketType, FavoriteType, ImageType, ProductType } from "../../Utils/Types";
import BorderOne from "../../Components/Global/Border/BorderOne";
import Products from "../../Components/Global/Products/Products";
import Comments from "../../Components/Global/Comments/Comments";

export default function ProductInfo(): React.JSX.Element {
  const [isImageLoad, setIsImageLoad] = useState(false);
  const [count, setCount] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [product, setProduct] = useState<ProductType>();
  const [tabValue, setTabValue] = useState('feature');
  const theme = useTheme();
  const productParams = useParams();
  const [images, setImages] = useState<ImageType[]>([]);
  const products = useSelector((state: RootState) => state.products);
  const basketList = useSelector((state: RootState) => state.basket)
  const favoriteList = useSelector((state: RootState) => state.favorite)

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  }
  const getValue = (value: number) => {
    setCount(value);
  }
  const addToBasket = (code: string) => {
    setCount(1);
  }
  const getIamges = () => {
    let imagesArray = ImageData.filter(image => image.idProduct.toString() === productParams.idProduct)
    let tempArray: { original: string, thumbnail: string }[] = [];
    imagesArray?.map(image => {
      tempArray?.push({ original: image.image, thumbnail: image.image })
    })
    setImages(imagesArray);
  }

  useEffect(() => {
    let tempProduct = products.find((product: ProductType) => product.id.toString() === productParams.idProduct)
    tempProduct && setProduct(tempProduct);

    let basketCount = basketList.find((product: BasketType) => product.id.toString() === productParams.idProduct);
    basketCount && setCount(basketCount.count)

    let isFavorite = favoriteList.find((product: FavoriteType) => product.id.toString() === productParams.idProduct);
    isFavorite != undefined && setFavorite(true)

    getIamges();
  }, [[], productParams])

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [productParams])
  return (
    <>
      <Box className="my-auto pt-1" sx={{ backgroundColor: theme.palette.thirdColor.light }}>
        <BorderOne>
          <div dir="rtl" className="md:flex md:justify-between">
            <div className="w-64 md:w-96 p-3 h-auto">
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                {images.map(image => (
                  <SwiperSlide key={image.id}>
                    <img src={image.image} alt="" className="w-96" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div dir="rtl" className="border rounded-md overflow-hidden h-fit pt-3 pb-10 px-3 ml-3 mt-3 mb-7 relative"
              style={{ background: theme.palette.thirdColor.light }}>
              <Typography variant="text4xl" component='p' color={theme.palette.textColor.main}>{product?.title}</Typography>
              <div className="flex justify-between my-5">
                <Typography variant="textxl" component='p' color={theme.palette.textColor.main}>کد: {product?.code}</Typography>
                <Checkbox checked={favorite} sx={{ height: 20 }} icon={<FavoriteBorder color="mainColor" />} checkedIcon={<Favorite color="mainColor" />} />
              </div>
              <Divider variant="middle" />
              <div className="flex flex-row-reverse justify-between mt-4">
                {product?.off ?
                  <div className="flex">
                    <Typography variant="textlg" sx={{ textDecorationLine: 'line-through', marginRight: 2 }} color={theme.palette.textColor.main}>{product?.price.toLocaleString()}</Typography>
                    <Typography variant="text3xl" color={theme.palette.textColor.main}>{Math.ceil(product?.price - (product?.price * product?.off / 100)).toLocaleString()}{<Toman color='textColor' />}</Typography>
                  </div>
                  : <Typography variant="text3xl" color={theme.palette.textColor.main}>{product?.price.toLocaleString()}{<Toman color='textColor' />}</Typography>
                }
                {product?.off && <Typography variant="textbase" sx={{ bgcolor: theme.palette.mainColor.main, paddingX: 1, borderRadius: 100, height: 25 }} color={theme.palette.textColor.main}>{product?.off}%</Typography>}
              </div>
              
              <div className="flex justify-center mt-2 mb-3">
                <SelectOption />
              </div>
              <div className="">
                <IconText text="بهترین قیمت در 30 روز گذشته" textSize="textsm" textColor={theme.palette.success.main} icon={<InfoIcon fontSize="small" color="mainColor" />}></IconText>
                <IconText text="تنها ۲ عدد در انبار باقی مانده" textSize="textsm" textColor={theme.palette.error.main} icon={<InfoIcon fontSize="small" color="mainColor" />}></IconText>
              </div>
              <div className="bottom-1 absolute left-5">
                {count === 0 && <Button text='افزودن به سبد' size='small' className=' rounded-md px-3 pt-1 mt-2 mx-auto' clickHandler={() => addToBasket(product?.code)} />}
                {count > 0 && <Counter value={count} className="mx-auto mt-2" getValue={getValue} />}
              </div>
            </div>
          </div>
        </BorderOne>

        <BorderOne>
          <div dir="rtl" className="text-center px-2">
            <Tabs value={tabValue} onChange={handleChangeTab} sx={{ color: theme.palette.mainColor.main }}
              variant="scrollable" scrollButtons="auto"
              textColor="inherit"
              indicatorColor="primary"
            >
              <Tab label="ویژگی محصول" value="feature" />
              <Tab label="جدول سایزبندی" value="grading" />
              <Tab label="توضیحات" value="description" />
              <Tab label="سوالات" value="question" />
              <Tab label="نظرات" value="comment" />
            </Tabs>
            <div className="">
              {tabValue === 'feature' && <Typography variant="text2xl">ویژگی محصول</Typography>}
              {tabValue === 'grading' && <Typography variant="text2xl">جدول سایزبندی</Typography>}
              {tabValue === 'description' && <Typography variant="text2xl">توضیحات</Typography>}
              {tabValue === 'question' && <Typography variant="text2xl">سوالات</Typography>}
              {tabValue === 'comment' &&
                <Comments comments={[]} />
              }
            </div>
          </div>

        </BorderOne>

        <BorderOne title="محصولات مرتبط">
          <Products filter='latest' showFilter={false} showPagination={false} />
        </BorderOne>
      </Box>
    </>
  )
}