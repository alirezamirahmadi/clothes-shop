import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Typography, useTheme, Skeleton } from "@mui/material";

import { FavoriteType, ProductType } from "../../../Utils/Types";
import Toman from "../Utility/Toman";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";

export default function ProductVCard({ product, favoriteList }: { product: ProductType, favoriteList: FavoriteType[] }): React.JSX.Element {
  
  const { id, image, title, code, price, off } = product;
  const [isImageLoad, setIsImageLoad] = useState(false);
  const [favoriteId, setFavoriteId] = useState<string>();
  const theme = useTheme();

  const loadImageHandler = () => {
    setIsImageLoad(true);
  }

  useEffect(() => {
    let favoritePro = favoriteList?.find((favorite: FavoriteType) => favorite.product?.id == id);
    favoritePro != undefined && setFavoriteId(favoritePro.id)

  }, [favoriteList])

  return (
    <>
      <div dir="rtl" className="overflow-hidden w-full h-max shadow hover:shadow-lg rounded-xl md:py-1 sm:mb-7 ms-1">
        <div className="relative group/item">
          <Link to={`/product-info/${id}`}>
            <img className='w-full h-48 sm:h-56 lg:h-64 mx-auto rounded-t-xl' style={{ display: isImageLoad ? 'block' : 'none' }} src={image} alt="" onLoad={loadImageHandler} />
            {!isImageLoad && <Skeleton variant="rounded" animation='wave' width='100%' height='15rem' />}
            <div className="h-7 overflow-hidden mt-1 md:px-1 lg:px-3">
              <Typography variant="body1" component='p' >{title}</Typography>
            </div>
          </Link>
          <div className="group/edit lg:opacity-0 group-hover/item:opacity-100 absolute top-3 right-1 transition-opacity duration-700 delay-75">
            <FavoriteIcon favoriteId={favoriteId} product={product} />
          </div>
        </div>
        <div className="md:px-1 lg:px-3">
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
        </div>
      </div>
    </>
  )
}