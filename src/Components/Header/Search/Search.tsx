import React, { useState } from 'react';
import { useTheme, Box, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from "react-redux";
import type { RootState } from '../../../Redux/Store'

import ProductHCard from '../../Global/Products/ProductHCard';
import { ProductType } from '../../../Utils/Types'
import { useProduct } from '../../../Hooks/ProductHook';

export default function ProductSearch({ itemWidth, getValue }: { itemWidth: number, getValue?: (value: string) => void }): React.JSX.Element {

  const theme = useTheme();
  const { data: products } = useProduct('all', '');
  const favoriteList = useSelector((state: RootState) => state.favorite);
  const [textSearch, setTextSearch] = useState('');

  const handleChangeSearch = (value: string) => {
    setTextSearch(value);
    getValue && getValue(value);
  }

  return (
    <>
      <Autocomplete
        id="product-select"
        sx={{ width: itemWidth }}
        options={products ? products : []}
        freeSolo
        autoHighlight
        getOptionLabel={(Product: ProductType) => Product.title}
        renderOption={(props, products) => (
          <Box key={products.id}>
            <ProductHCard product={{ ...products, showType: 'col-search' }} favoriteList={favoriteList} />
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            sx={{ borderRadius: 100, boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.3)', '.MuiInputBase-root': { borderRadius: 100 } }}
            value={textSearch}
            onChange={event => handleChangeSearch(event.target.value)}
            placeholder='جستجوی محصولات'
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
      />
    </>
  );
}