import React, { useState, useEffect } from 'react';
import { Divider } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
import { useSelector } from "react-redux";
import type { RootState } from '../../../Redux/Store';

import ProductHCard from '../Products/ProductHCard';
import { FavoriteType, ProductType } from '../../../Utils/Types';
import { useProduct } from '../../../Hooks/ProductHook';

export default function FavoriteDrawer(): React.JSX.Element {
  const [favorites, setFavorites] = useState<ProductType[]>([]);
  const { data: products } = useProduct();
  // const products = useSelector((state: RootState) => state.products);
  const favoriteList = useSelector((state: RootState) => state.favorite);

  useEffect(() => {
    let tempProduct: ProductType[] = [];
    favoriteList.map((favorite: FavoriteType) => {
      let temp = products.find((product: ProductType) => product.id === favorite.id)
      temp && tempProduct.push(temp);
    })
    tempProduct && setFavorites(tempProduct);
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
            favorites.map(favorite => (
              <ProductHCard key={favorite.id} {...favorite} showType='col-search' />
            ))
          }
        </div>
      </div>
    </>
  )
}