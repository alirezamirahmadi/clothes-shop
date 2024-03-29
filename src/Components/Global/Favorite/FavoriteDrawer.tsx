import React, { useState, useEffect } from 'react';
import { Divider } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
import { useSelector } from "react-redux";
import type { RootState } from '../../../Redux/Store';

import ProductHCard from '../Products/ProductHCard';
import { FavoriteType, ProductType } from '../../../Utils/Types';
// import { useProduct } from '../../../Hooks/ProductHook';
import { useFavorite } from '../../../Hooks/FavoriteHook';

export default function FavoriteDrawer(): React.JSX.Element {
  const loginInfo = useSelector((state: RootState) => state.login);
  // const [favoriteProducts, setFavoriteProducts] = useState<ProductType[]>([]);
  // const { data: products } = useProduct();
  const { data: favoriteList } = useFavorite(loginInfo ? loginInfo.userInfo?.id : '-1');
  // const products = useSelector((state: RootState) => state.products);
  // const favoriteList = useSelector((state: RootState) => state.favorite);

  useEffect(() => {
    // let tempProduct: ProductType[] = [];
    // favoriteList?.map((favorite: FavoriteType) => {
    //   let temp = products.find((product: ProductType) => product.id === favorite.id)
    //   temp && tempProduct.push(temp);
    // })
    // tempProduct && setFavoriteProducts(tempProduct);

  }, [favoriteList])

  return (
    <>
      <div dir='rtl' className="w-80">
        <div className="mb-4 text-center">
          <FavoriteBorder sx={{ fontSize: 60 }} color='primary' />
          <Divider variant='middle' />
        </div>
        <div>
          {
            favoriteList?.map((favorite: FavoriteType) => (
              <ProductHCard key={favorite.id} {...favorite.product} showType='col-search' />
            ))
          }
        </div>
      </div>
    </>
  )
}