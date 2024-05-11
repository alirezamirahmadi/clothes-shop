import { useState, useEffect } from 'react';
import { Checkbox } from "@mui/material";
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from '../../../Redux/Store';
import type { ProductType } from '../../../Utils/Types';
import { postFavorite, deleteFavorite, getFavorite } from '../../../Redux/Reducer/FavoriteReducer';

export default function FavoriteIcon({ favoriteId, product, className }: { favoriteId?: string, product?: ProductType, className?: string }): React.JSX.Element {

  const [favorite, setFavorite] = useState<boolean>(false);
  const loginInfo = useSelector((state: RootState) => state.login);
  const dispatch: AppDispatch = useDispatch();

  const handleChange = () => {
    if (loginInfo?.userInfo?.id) {
      favorite ? dispatch(deleteFavorite(favoriteId ?? '0')).then(() => {
        dispatch(getFavorite(loginInfo?.userInfo?.id ?? '0'))
      })
        : dispatch(postFavorite({ customerId: loginInfo?.userInfo?.id, product })).then(() => {
          dispatch(getFavorite(loginInfo?.userInfo?.id ?? '0'));
        })
      setFavorite(!favorite);
    }
  }
  
  useEffect(() => {
    setFavorite(Boolean(favoriteId));
  }, [favoriteId])

  return (
    <>
      <Checkbox checked={favorite} onChange={handleChange} className={className} sx={{ height: 20 }} icon={<FavoriteBorder color="primary" />} checkedIcon={<Favorite color="primary" />} />
    </>
  )
}