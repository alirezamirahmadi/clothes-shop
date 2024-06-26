import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import {
  Typography, useTheme, Box, Divider, Tabs, Tab, Button,
  FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Alert
} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import ReactImageGallery from "react-image-gallery";
import { ReactImageGalleryItem } from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from '../../Redux/Store'
import { useProduct } from "../../Hooks/ProductHook";
import Snack from "../../Components/Global/Snack/Snack";
import IconText from "../../Components/Global/IconText/IconText";
import Toman from "../../Components/Global/Utility/Toman";
import Counter from "../../Components/Global/Counter/Counter";
import { FavoriteType, ProductType, BasketType, ImageType, SeveritySnack } from "../../Utils/Types";
import BorderOne from "../../Components/Global/Border/BorderOne";
import Products from "../../Components/Global/Products/Products";
import Comments from "../../Components/Global/Comments/Comments";
import { getBasket, postBasket } from "../../Redux/Reducer/BasketReducer";
import { useImage } from "../../Hooks/ImageHook";
import Loading from "../../Components/Global/Loading/Loading";

import FavoriteIcon from "../../Components/Global/FavoriteIcon/FavoriteIcon";

export default function ProductInfo(): React.JSX.Element {

  const loginInfo = useSelector((state: RootState) => state.login);
  const productParams = useParams();
  const { data, isLoading, isFetching, isError } = useProduct('id', productParams.idProduct ?? '0');
  const { data: ImageData, isLoading: isImageLoading, isFetching: isImageFetching } = useImage();
  const dispatch: AppDispatch = useDispatch();
  const theme = useTheme();
  const [count, setCount] = useState<number>(1);
  const [favoriteId, setFavoriteId] = useState<string>();
  const [product, setProduct] = useState<ProductType>();
  const [tabValue, setTabValue] = useState('feature');
  const [images, setImages] = useState<ReactImageGalleryItem[]>([]);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [color, setColor] = useState<string>('');
  const [size, setSize] = useState<string>('');
  const [visibleSnack, setVisibleSnack] = useState(false);
  const [contextSnack, setContextSnack] = useState('');
  const [severitySnack, setSeveritySnack] = useState<SeveritySnack>('error');
  const favoriteList = useSelector((state: RootState) => state.favorite);

  const showSnack = (severity: SeveritySnack, message: string) => {
    setContextSnack(message);
    setVisibleSnack(true);
    setSeveritySnack(severity);
  }

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
    return event;
  }

  const handleChangeColor = (event: SelectChangeEvent<string>) => {
    const newColor: string = event.target.value;
    setColor(newColor);

    setImageIndex(preValue => preValue === 2 ? 0 : preValue + 1)
  }

  const getValue = (value: number) => {
    setCount(value);
  }

  const addProductToBasket = (product: ProductType | undefined) => {
    if (color === '' || size === '') {
      showSnack('error', 'لطفا برخی از گزینه‌های محصول را قبل از اضافه کردن آن به سبد خرید، انتخاب کنید.');
      return;
    }
    if (product && loginInfo?.userInfo?.id) {
      let newItem: BasketType = {
        customerId: loginInfo?.userInfo?.id, title: product.title, code: product.code, image: product.image, price: product.price,
        color: { id: +(color.split(';')[0]), title: color.split(';')[1] }, size: { id: +(size.split(';')[0]), title: size.split(';')[1] }, count, off: product.off
      }
      if (product) {
        dispatch(postBasket(newItem)).then(() => {
          dispatch(getBasket(loginInfo?.userInfo?.id ?? '0'));
        })
        showSnack('success', 'کالای مورد نظر به سبد خرید اضافه شد.');
      }
    }
  }

  const getIamges = () => {
    let imagesArray = ImageData?.filter((image: ImageType) => image.idProduct.toString() === productParams.idProduct)
    let tempArray: ReactImageGalleryItem[] = [];
    imagesArray?.map((image: ImageType) => {
      tempArray?.push({ original: image.image, thumbnail: image.image })
    })
    setImages(tempArray);
  }

  useEffect(() => {
    let index = favoriteList ? favoriteList.findIndex((favorite: FavoriteType) => favorite.product?.id?.toString() === productParams.idProduct) : -1;
    index != -1 && setFavoriteId(favoriteList[index].id);

    getIamges();
    setProduct(data);
    document.documentElement.scrollTop = 0;
  }, [data, productParams])

  if (isLoading || isFetching) {
    return (<Loading />);
  }

  if (isError) {
		return (
			<div dir="rtl">
				<Alert variant="filled" severity="error">مشکلی در برقراری ارتباط با سرور وجود دارد</Alert>
			</div>
		)
	}

  return (
    <>
      <Box className="my-auto py-8">
        <BorderOne>
          <div dir="rtl" className="md:flex md:justify-between">
            {(isImageLoading || isImageFetching) ? <Loading />
              : <div className="p-3 h-auto">
                <ReactImageGallery items={images} startIndex={imageIndex} showNav={false} lazyLoad={true} showPlayButton={false} />
              </div>
            }
            <div dir="rtl" className="rounded-lg shadow-md overflow-hidden h-fit pt-3 pb-5 px-3 ml-3 mt-3 mb-7 relative bg-gray-100">
              <Typography variant="h4" component='p' >{product?.title}</Typography>
              <div className="flex justify-between my-5">
                <Typography variant="h6" component='p' >کد: {product?.code}</Typography>
                <FavoriteIcon favoriteId={favoriteId} product={product} />
              </div>
              <Divider variant="middle" />
              <div className="flex flex-row-reverse justify-between mt-4">
                {product?.off ?
                  <div className="flex">
                    <Typography variant="body1" sx={{ textDecorationLine: 'line-through', marginRight: 2 }} >{product?.price.toLocaleString()}</Typography>
                    <Typography variant="h4" >{Math.ceil(product?.price - (product?.price * product?.off / 100)).toLocaleString()}{<Toman color='textColor' />}</Typography>
                  </div>
                  : <Typography variant="h4" >{product?.price.toLocaleString()}{<Toman color='textColor' />}</Typography>
                }
                {product?.off && <Typography variant="body1" sx={{ bgcolor: theme.palette.primary.main, paddingX: 1, borderRadius: 100, height: 25 }} color={theme.palette.primary.contrastText}>{product?.off}%</Typography>}
              </div>

              <div className="flex justify-start items-center mt-2 mb-3">
                <FormControl fullWidth size="small">
                  <InputLabel id="select-color">رنگ</InputLabel>
                  <Select labelId="select-color" value={color} label="رنگ" onChange={handleChangeColor}>
                    {product?.color.map(color => (
                      <MenuItem key={color.id} sx={{ direction: 'ltr' }} value={color.id + ';' + color.title}>{color.title}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth size="small">
                  <InputLabel id="select-size">سایز</InputLabel>
                  <Select labelId="select-size" value={size} label="سایز" onChange={event => setSize(event.target.value)}>
                    {product?.size.map(size => (
                      <MenuItem key={size.id} sx={{ direction: 'ltr' }} value={size.id + ';' + size.title}>{size.title}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="flex justify-between">
                <Counter value={count} getValue={getValue} minValue={1} />
                <Button variant="contained" onClick={() => addProductToBasket(product)} sx={{ display: 'block' }}>افزودن به سبد</Button>
              </div>
              <div className="mt-5">
                <IconText text="بهترین قیمت در 30 روز گذشته" textSize="body2" textColor={theme.palette.success.main} icon={<InfoIcon fontSize="small" color="primary" />}></IconText>
                <IconText text="تنها ۲ عدد در انبار باقی مانده" textSize="body2" textColor={theme.palette.error.main} icon={<InfoIcon fontSize="small" color="primary" />}></IconText>
              </div>
            </div>
          </div>
        </BorderOne>

        <BorderOne className="mt-8">
          <div dir="rtl" className="px-2">
            <Tabs value={tabValue} onChange={handleChangeTab} sx={{ color: theme.palette.primary.main }}
              variant="scrollable" scrollButtons="auto"
              textColor="inherit"
              indicatorColor="primary"
            >
              <Tab label={<Typography variant="h6">ویژگی محصول</Typography>} value="feature" />
              <Tab label={<Typography variant="h6">جدول سایزبندی</Typography>} value="grading" />
              <Tab label={<Typography variant="h6">توضیحات</Typography>} value="description" />
              <Tab label={<Typography variant="h6">سوالات</Typography>} value="question" />
              <Tab label={<Typography variant="h6">نظرات</Typography>} value="comment" />
            </Tabs>
            <div className="">
              {tabValue === 'feature' && <Typography variant="h6">ویژگی محصول</Typography>}
              {tabValue === 'grading' && <Typography variant="h6">جدول سایزبندی</Typography>}
              {tabValue === 'description' && <Typography variant="h6">توضیحات</Typography>}
              {tabValue === 'question' && <Typography variant="h6">سوالات</Typography>}
              {tabValue === 'comment' && <Comments idProduct={productParams.idProduct ?? '0'} />}
            </div>
          </div>
        </BorderOne>

        <BorderOne title="محصولات مرتبط" className="mt-8">
          <Products filter='latest' showFilter={false} showPagination={false} />
        </BorderOne>
      </Box>
      <Snack context={contextSnack} severity={severitySnack} show={visibleSnack} handleCloseSnack={() => setVisibleSnack(false)} />
    </>
  )
}