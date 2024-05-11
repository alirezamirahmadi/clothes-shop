import { Divider } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
import { useSelector } from "react-redux";
import type { RootState } from '../../../Redux/Store';

import ProductHCard from '../Products/ProductHCard';
import { FavoriteType } from '../../../Utils/Types';

export default function FavoriteDrawer(): React.JSX.Element {

  const favoriteList = useSelector((state: RootState) => state.favorite);

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
              <ProductHCard key={favorite.id} product={{...favorite.product, showType:'col-search'}} favoriteList={favoriteList} />
            ))
          }
        </div>
      </div>
    </>
  )
}