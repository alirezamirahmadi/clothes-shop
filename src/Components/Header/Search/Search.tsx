import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { TextField, styled, useTheme } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from "react-redux";
import type { RootState } from '../../../Redux/Store'

import { TextFieldRounded50 } from '../../CustomizedComponent/CutomizedTextField';
// import SearchItem from './SearchItem';
import ProductHCard from '../../Global/Products/ProductHCard';
// import { Products } from '../../../Utils/Datas'
import { ProductType } from '../../../Utils/Types'
import { getProductFromServer } from '../../../Redux/Reducer/ProductReducer'

export default function ProductSearch({ itemWidth, getValue }: { itemWidth: number, getValue?:(value:string) => void }): React.JSX.Element {
  const theme = useTheme();
  const products = useSelector((state:RootState) => state.products);
  const [textSearch, setTextSearch] = useState('');
  // const dispatch = useDispatch();
  // const allProducts = useSelector(state => state.products);

  const handleChangeSearch = (value:string) => {
    setTextSearch(value);
    getValue(value);
  }

  // useEffect(()=>{
  //   dispatch(getProductFromServer());
  // }, [])

  return (
    <>
      <Autocomplete
        id="product-select"
        sx={{ width: itemWidth, fontFamily: 'B Nazanin', color:theme.palette.textColor.main }}
        options={products}
        freeSolo
        autoHighlight 
        getOptionLabel={(Product: ProductType) => Product.title}
        renderOption={(props, products) => (
          <Box sx={{ ':hover': { color:theme.palette.secondColor.main }, bgcolor:theme.palette.secondColor.main }} {...props}>
            <ProductHCard {...products} showType='col-search' />
          </Box>
        )}
        renderInput={(params) => (
          <TextFieldRounded50
            {...params}
            size="small"
            value={textSearch}
            onChange={event => handleChangeSearch(event.target.value)}
            theme={theme}
            placeholder='جستجوی محصولات'
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', 
            }}
          />
        )}
      />
    </>
  );
}